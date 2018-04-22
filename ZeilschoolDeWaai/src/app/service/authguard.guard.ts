import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  // authenticatie
  constructor(private user: UserService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.user.getUserLoggedIn() === true) {
    this.router.navigate(['/login']);
    }
    return true;
    //return this.user.getUserLoggedIn();
  }
}
