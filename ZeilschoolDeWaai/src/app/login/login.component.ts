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

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (username === 'developer' && password === 'dev123') {
      this.user.setUserLoggedIn();
      this.router.navigate(['medewerkers']);
    }
  }
}
