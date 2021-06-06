import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/models/liga';
import { Tim } from 'src/app/models/tim';
import { LigaService } from 'src/app/services/liga.service';
import { TimService } from 'src/app/services/tim.service';

@Component({
  selector: 'app-tim-dialog',
  templateUrl: './tim-dialog.component.html',
  styleUrls: ['./tim-dialog.component.css']
})
export class TimDialogComponent implements OnInit {

  public flag: number
  lige : Liga[]
  constructor(public dialogRef : MatDialogRef<TimDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: Tim,public snackBar : MatSnackBar, public ligaService : LigaService, public timService : TimService) { }

  ngOnInit(): void {
      this.ligaService.getAllLigas().subscribe(data => {
        this.lige = data;
      })
  }

  compareTo(a,b) {
    return a.id == b.id
  }

  public add() :void {

    this.timService.addTim(this.data).subscribe(() => {
      this.snackBar.open('Tim uspesno dodat' + this.data.id, 'OK', {duration:2500})
    }),
    (error: Error) => {
      console.log(error.message)
      this.snackBar.open('Doslo je do greske prilikom dodavanja','OK', {duration: 2500})
    }

  }

  public update() :void {
    this.timService.updateTim(this.data).subscribe(() => {
      this.snackBar.open('Tim uspesno izmenjen' + this.data.id, 'OK', {duration:2500})
    }),
    (error: Error) => {
      console.log(error.message)
      this.snackBar.open('Doslo je do greske prilikom modifikacije','OK', {duration: 2500})
    }

  }

  public delete() :void {
    this.timService.deleteTim(this.data.id).subscribe(() => {
      this.snackBar.open('Tim uspesno obrisana' + this.data.id, 'OK', {duration:2500})
    }),
    (error: Error) => {
      console.log(error.message)
      this.snackBar.open('Doslo je do greske prilikom brisanja','OK', {duration: 2500})
    }
  }

  public cancel() :void {
      this.dialogRef.close();
      this.snackBar.open('Doslo je do greske prilikom brisanja','OK', {duration: 2500})
  }

}
