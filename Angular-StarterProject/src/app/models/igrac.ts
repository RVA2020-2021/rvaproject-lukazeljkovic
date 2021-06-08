import { Nacionalnost } from "./nacionalnost";
import { Tim } from "./tim";

export class Igrac {
  id: number;
  brojReg: string;
  datumRodjenja: Date;
  ime: string;
  prezime: string;
  nacionalnost: Nacionalnost
  tim: Tim;
}
