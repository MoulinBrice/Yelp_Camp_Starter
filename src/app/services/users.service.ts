import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post('http://localhost:3000/users', user)
  }

  getUser(email: string): Observable<User[] | void> {
    return this.http.get<User[]|[]>(`http://localhost:3000/users?email=${email}`).pipe(
      map((response) => {return response}),
        catchError((error) => {
          console.log(error);
          return [];
        })
    );
  }


}
