import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'
import { HttpClient } from '@angular/common/http';


import { Camp } from '../camp';
import { Review } from '../review';

interface getCampReviews{
  Camp: Camp,
  reviews: Review[]
}

@Injectable({
  providedIn: 'root'
})
export class CampsService {

  urlCampsDb = 'http://localhost:3000/camps';



  constructor(private http: HttpClient) { }

  //INDEX
  getCamps(): Observable<Camp[]|void> {
    return this.http.get<Camp[]|void>(this.urlCampsDb).pipe(
      map((camps: Camp[]|void) => {return camps}))
  }

  //SHOW
  getCamp(id: number): Observable<Camp|void> {
    return this.http.get<Camp>(`${this.urlCampsDb}/${id}`).pipe(
      map((camp: Camp|void) => {return camp}))
  }

  //NEW
  addCamp(camp: Camp): Observable<Camp|void> {
    return this.http.post<Camp>(this.urlCampsDb, camp).pipe(
      map((camp: Camp|void) => {return camp}))
  }

  //SEARCH
  searchCamp(term: string): Observable<Camp[]|void> {
    if (!term.trim()) {
      return this.getCamps();
    }
    return this.http.get<Camp[]>(`${this.urlCampsDb}/?q=${term}`).pipe(
      map((camps: Camp[]|void) => {return camps}))
  }

  // getCampReviews(campId: number): Observable<getCampReviews[] |void> {
  //   return this.http.get<getCampReviews[]|void>(`http://localhost:3000/camps?id=${campId}&_embed=reviews`).pipe(
  //     map((reviews: getCampReviews[]|void) => {console.table(reviews); return reviews}))
  // }

 }

