import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGRACI_TIM_URL, IGRAC_URL } from '../app.constants';
import { Igrac } from '../models/igrac';


@Injectable({
  providedIn: 'root'
})
export class IgracService {

  constructor(private httpClient : HttpClient) { }

  public getIgraciTima(idTima : number) : Observable<any>{
    return this.httpClient.get(`${IGRACI_TIM_URL}/${idTima}`)
  }

  public addIgracaTima(igrac : Igrac) : Observable<any>{
    return this.httpClient.post(`${IGRAC_URL}`,igrac)
  }

  public updateIgracaTima(igrac : Igrac) : Observable<any>{
    return this.httpClient.put(`${IGRAC_URL}`,igrac)
  }

  public deleteIgracaTima(id : number) : Observable<any>{
    return this.httpClient.delete(`${IGRAC_URL}/${id}`)
  }
}
