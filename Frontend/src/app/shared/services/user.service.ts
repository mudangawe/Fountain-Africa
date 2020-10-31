import { Injectable } from '@angular/core';

import { Users } from '../data/users-data';
import { iUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: iUser;

  constructor() { }

  getUsers(): iUser[] {
    return Users;
  }

  setUser(newUser: iUser) {
    Users.push(newUser);
  }
}
