import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  LocalStorageUser: any|null;
  connexionHour: any;

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

  isLogedInLocalStorage() {
    if(localStorage.getItem('yelpUser')) {
      return true;
    } else {
      return false;
    }
  }

  setUserInLocalStorage(user: User|any) {
    console.log(user)
    this.connexionHour = new Date();
    const savUser = {
      name: user.name,
      email: user.email,
      id: user.id,
      connexionHour: this.connexionHour
    }
    console.log(savUser)
    localStorage.setItem('yelpUser',JSON.stringify(savUser));
  }

  getUserInLocalStorage() {
    if(localStorage.getItem('yelpUser')) {
      this.LocalStorageUser = localStorage.getItem('yelpUser');
      return JSON.parse(this.LocalStorageUser);
    } else {
      return false;
    }
  }

  removeUserInLocalStorage() {
    if(localStorage.getItem('yelpUser')) {
      console.log("removeUserInLocalStorage")
      localStorage.removeItem('yelpUser');
    }
  }

  logOut() {
    this.removeUserInLocalStorage()
  }




}
