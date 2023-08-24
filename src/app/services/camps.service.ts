import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'
import { HttpClient } from '@angular/common/http';


import { Camp } from '../camp';

@Injectable({
  providedIn: 'root'
})
export class CampsService {

  urlCampsDb = 'http://localhost:3000/camps';

  constructor(private http: HttpClient) { }

  //INDEX
  getCamps(): Observable<Camp[]|void> {
    return this.http.get<Camp[]|void>(this.urlCampsDb).pipe(
      map((camps: Camp[]|void) => {console.table(camps); return camps}))

  }

 }

