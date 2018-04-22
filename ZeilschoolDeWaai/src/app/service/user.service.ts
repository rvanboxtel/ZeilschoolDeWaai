import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  // Om in te loggen is dit nodig
  private isUserLoggedIn;
  public username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.username = 'developer';
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
