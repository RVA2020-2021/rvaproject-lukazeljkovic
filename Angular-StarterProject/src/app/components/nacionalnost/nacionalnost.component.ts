import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Nacionalnost } from 'src/app/models/nacionalnost'
import { NacionalnostService } from 'src/app/services/nacionalnost.service';

@Component({
  selector: 'app-nacionalnost',
  templateUrl: './nacionalnost.component.html',
  styleUrls: ['./nacionalnost.component.css']
})
export class NacionalnostComponent implements OnInit,OnDestroy {

  displayedColumns = ['id','naziv','skracenica', 'actions'];
  dataSource: MatTableDataSource<Nacionalnost>
  subscription : Subscription

  constructor(private nacionalnostService : NacionalnostService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.loadData();
  }

public loadData() {
    this.subscription = this.nacionalnostService.getAllNacionalnosts().subscribe(
      data => {
        console.log(data)
        this.dataSource = new MatTableDataSource(data)
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message)
    }
}

}
