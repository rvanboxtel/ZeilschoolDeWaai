import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  // Om in te loggen is dit nodig
  private isUserLoggedIn;
  public username;
  private password;
  user;
  private apiUrl = 'http://zeilschoolwebapi.azurewebsites.net/api/werknemers/'
  constructor(private http: Http) {
    this.isUserLoggedIn = false;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setUserLoggedOut() {
    this.isUserLoggedIn = false;
    this.username = '';
  }
  getUserLogin(user, password) {
    this.http.get(this.apiUrl + user)
      .map(res => res.json())
      .subscribe(data => {
        this.user = data;
        if (user === this.user.GEBRUIKERSNAAM && password === this.user.WACHTWOORD) {
          this.isUserLoggedIn = true;
        }
      });

  }
}
