import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/models/liga';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-liga-dialog',
  templateUrl: './liga-dialog.component.html',
  styleUrls: ['./liga-dialog.component.css']
})
export class LigaDialogComponent implements OnInit {

  public flag : number;
  constructor(public snackBar : MatSnackBar,
    public dialogRef : MatDialogRef<LigaDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data : Liga,
    public ligaService : LigaService) { }

  ngOnInit(): void {
  }

  public addLiga(): void {
    this.ligaService.addLiga(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodata liga: ' + this.data.naziv, 'OK', {duration: 2500})
    }),
    (error : Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom dodavanja nove lige', 'Zatvori', {duration: 2500})
    }
  }

  public updateLiga(): void {
    this.ligaService.updateLiga(this.data).subscribe(() => {
      this.snackBar.open('Uspesno modifikovana liga: ' + this.data.naziv, 'OK', {duration: 2500})
    }),
    (error : Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom modifikacije nove Lige', 'Zatvori', {duration: 2500})
    }
  }

  public deleteLiga(): void {
    this.ligaService.deleteLiga(this.data.id).subscribe(() => {
      this.snackBar.open('Uspesno obrisana liga: ' + this.data.naziv, 'OK', {duration: 2500})
    }),
    (error : Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom modifikacije nove Lige', 'Zatvori', {duration: 2500})
    }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.', 'Zatvori', {duration: 1000})
  }

}
