import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NACIONALNOST_URL } from '../app.constants'

@Injectable({
  providedIn: 'root'
})
export class NacionalnostService {

  constructor(private httpClient : HttpClient) { }

  public getAllNacionalnosts() : Observable<any> {
    return this.httpClient.get(`${NACIONALNOST_URL}`)


  }
}
