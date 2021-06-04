import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';
import { NacionalnostComponent } from '../../nacionalnost/nacionalnost.component';
import { Nacionalnost } from 'src/app/models/nacionalnost'

@Component({
  selector: 'app-nacionalnost-dialog',
  templateUrl: './nacionalnost-dialog.component.html',
  styleUrls: ['./nacionalnost-dialog.component.css']
})
export class NacionalnostDialogComponent implements OnInit {

  public flag : number;

  constructor(public snackBar : MatSnackBar,
              public dialogRef : MatDialogRef<NacionalnostDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data : Nacionalnost,
              public nacionalnostService : NacionalnostService) { }

  ngOnInit(): void {
  }

  public addNacionalnost(): void {
    this.nacionalnostService.addNacionalnost(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodata nacionalnost: ' + this.data.naziv, 'OK', {duration: 2500})
    }),
    (error : Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom dodavanja novog artikla', 'Zatvori', {duration: 2500})
    }
  }

  public updateNacionalnost(): void {
    this.nacionalnostService.updateNacionalnost(this.data).subscribe(() => {
      this.snackBar.open('Uspesno modifikovana nacionalnost: ' + this.data.naziv, 'OK', {duration: 2500})
    }),
    (error : Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom modifikacije novog artikla', 'Zatvori', {duration: 2500})
    }
  }

  public deleteNacionalnost(): void {
    this.nacionalnostService.deleteNacionalnost(this.data.id).subscribe(() => {
      this.snackBar.open('Uspesno obrisana nacionalnost: ' + this.data.naziv, 'OK', {duration: 2500})
    }),
    (error : Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom modifikacije novog artikla', 'Zatvori', {duration: 2500})
    }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.', 'Zatvori', {duration: 1000})
  }

}
