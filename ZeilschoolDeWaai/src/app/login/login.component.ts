import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/** Login component*/
export class LoginComponent implements OnInit {
  public username: string;
  private password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,) {}

  ngOnInit() {
  }
}
