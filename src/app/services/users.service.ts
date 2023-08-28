import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  addUser(user: User) {}
}
