import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/** Login component*/
export class LoginComponent implements OnInit {
  constructor(private router: Router, private user: UserService) { }
  verkeerd = false;
  ngOnInit() {
  }
  // om in the loggen
  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.user.getUserLogin(username, password);
    if (this.user.getUserLoggedIn() === true) {
      this.router.navigate(['medewerkers']);
    } else if (this.user.user !== undefined) {
      this.verkeerd = true;
    }
  }
}
