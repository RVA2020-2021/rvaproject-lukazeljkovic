import { Component, Input, OnInit } from '@angular/core';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { Tim } from 'src/app/models/tim';

@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css']
})
export class IgracComponent implements OnInit {

  @Input() selektovaniTim : Tim
  constructor() { }

  ngOnInit(): void {
  }

  openDialog(flag : number, id? : number, ime? : string, prezime? : string, datumRodjenja? : Date, brojReg? : string, nacionalnost? : Nacionalnost) {

  }

}
