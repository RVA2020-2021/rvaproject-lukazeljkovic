import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Tim } from 'src/app/models/tim';
import { TimService } from 'src/app/services/tim.service';
import { TimDialogComponent } from '../dialogs/tim-dialog/tim-dialog.component';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit, OnDestroy {

  displayedColumns = ['id','naziv','osnovan','sediste','liga','actions']
  dataSource : MatTableDataSource<Tim>
  subscription : Subscription
  selektovatiTim: Tim;

  @ViewChild(MatSort,{static:false}) sort:MatSort
  @ViewChild(MatPaginator,{static:false}) paginator:MatPaginator
  constructor(private timService : TimService, private dialog: MatDialog) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.subscription =
    this.timService.getAllTims().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.filterPredicate = (data, filter: string) =>{
          const accumulator = (currentTerm, key) => {
            return key === 'liga' ? currentTerm + data.liga.naziv : currentTerm + data[key];
          }
          const dataStr = Object.keys(data).reduce(accumulator,'').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        this.dataSource.sortingDataAccessor = (data, property) => {
          switch(property) {
            case 'liga': return data.liga.naziv.toLowerCase();

            default: return data[property];
          }
        };

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message)
    }
  }

  public openDialog(flag: number,id?,naziv?,osnovan?,sediste?,liga?): void
  {

    const dialogRef = this.dialog.open(TimDialogComponent, {
      data:{id,naziv,osnovan,sediste,liga}
    });
    dialogRef.componentInstance.flag= flag;
    dialogRef.afterClosed().subscribe(res => {
      if(res===1) {
        this.loadData()
      }
    })
  }

  selectRow(row)
  {
    this.selektovatiTim = row;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    this.dataSource.filter = filterValue;

  }

}
