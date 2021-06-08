import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Igrac } from 'src/app/models/igrac';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { Tim } from 'src/app/models/tim';
import { IgracService } from 'src/app/services/igrac.service';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';
import { TimService } from 'src/app/services/tim.service';

@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit,OnDestroy {

  public flag: number;
  igraci: Igrac[];
  timovi: Tim[];
  nacionalnosti: Nacionalnost[];
  igracSubscription: Subscription;
  nacionalnostSubscription : Subscription;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Igrac,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<IgracDialogComponent>,
    public igracService: IgracService,
    public timService: TimService,
    public nacionalnostService: NacionalnostService
  ) { }

  ngOnDestroy(): void {
    this.nacionalnostSubscription.unsubscribe();
    this.igracSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.nacionalnostSubscription = this.nacionalnostService.getAllNacionalnosts().subscribe(data => {
      this.nacionalnosti = data;
    })
    this.timService.getAllTims().subscribe( data => {
      this.timovi = data;
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message)
    };

  }

  compareTo(a,b) {
    return a.id == b.id;
  }

  public add() : void {
    this.igracService.addIgracaTima(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodat igrac', 'OK', {
        duration: 25000
      })
    }),
      (error:Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open('Doslo je do greske prilikom dodavanja', 'Zatvori', {
          duration: 25000
        })
      }
  }

  public update() : void{
    this.igracService.updateIgracaTima(this.data).subscribe(()=>{
      this.snackBar.open('Uspesno azuriran igrac', 'OK', {
        duration: 2500
      })
    }),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom azuriranja', 'Zatvori', {
        duration: 2500
      })
    }
  }

  public delete() : void{
    this.igracService.deleteIgracaTima(this.data.id).subscribe(()=>{
      this.snackBar.open('Uspesno obrisan igrac', 'OK', {
        duration: 2500
      })
    }),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom brisanja', 'Zatvori', {
        duration: 1000
      })
    }
  }

  public cancel(): void {
    this.dialogRef.close();
     this.snackBar.open('Odustali ste', 'Zatvori',{
       duration: 1000
     })
  }


}
