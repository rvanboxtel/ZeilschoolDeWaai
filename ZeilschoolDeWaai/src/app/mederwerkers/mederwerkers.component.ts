import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Schip, schip } from '../service/Models/index';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpHandler } from '@angular/common/http/src/backend';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mederwerkers',
  templateUrl: './mederwerkers.component.html',
  styleUrls: ['./mederwerkers.component.scss']
})
/** mederwerkers component*/
export class MedewerkersComponent implements OnInit {
  public opened = false;
  public dataSaved = false;
  NUMMER;
  KLASSE;
  NAAM;
  AVERIJ;
  SOORTCODE;
  NewOrEdit;
  selectedValue;
  message;
  public klasses: any = {};
  public cursussen: any = {};
  public cursus: any = {};
  public cursuscursist: any = {};
  public kendoData: any = {};
  /** mederwerkers ctor */
  public vloot: any = {};
  public position: 'top' | 'bottom' | 'both' = 'top';
  private apiUrl = 'https://zeilschoolwebapi.azurewebsites.net/api/'
  public gridData: any[];
  constructor(private formBuilder: FormBuilder, private http: Http, private user: UserService, private router: Router) {
  }

  ngOnInit() {
    this.getData();
    this.positionChange();
    
  }

  public getData() {
    this.getSchepen();
    this.getCursussen();
    this.http.get(this.apiUrl + 'soortcursus')
      .map((res: Response) => res.json())
      .subscribe(data => { this.cursussen = data; });

  }
  public getSchepen() {
    this.http.get(this.apiUrl + 'schips')
      .map((res: Response) => res.json())
      .subscribe(data => { this.vloot = data; this.kendoData = this.vloot; });
    this.http.get(this.apiUrl + 'schipklasses')
      .map((res: Response) => res.json())
      .subscribe(data => { this.klasses = data; });
  }

  public getCursussen() {
    this.http.get(this.apiUrl + 'cursistcursus')
      .map((res: Response) => res.json())
      .subscribe(data => { this.cursuscursist.push(data) });
    this.http.get(this.apiUrl + 'cursus')
      .map((res: Response) => res.json())
      .subscribe(data => { this.cursus = data; });
  }
  // een nieuw schip maken

  public close() {
    this.opened = false;
  }
  public positionChange(): void {
    this.position = 'both';
  }
  public open() {
    this.opened = true;
    this.NewOrEdit = 'new';
    this.NUMMER = null, this.KLASSE = null, this.NAAM = '', this.AVERIJ = false, this.SOORTCODE = null;
  }

  public edit(value) {
    this.opened = true;
    this.NUMMER = value.NUMMER,
      this.KLASSE = this.klasses[value.KLASSE - 1],
      this.NAAM = value.NAAM,
      this.AVERIJ = value.AVERIJ,
      this.SOORTCODE = this.cursussen[value.SOORTCODE - 1];

    this.NewOrEdit = 'edit';
  }

  public submit() {
    this.dataSaved = true;
    //console.log(this.NUMMER, this.KLASSE, this.NAAM, this.AVERIJ, this.SOORTCODE);
    const schips: Schip = {
      NUMMER: this.NUMMER,
      KLASSE: this.KLASSE.KLASSEID,
      NAAM: this.NAAM,
      AVERIJ: this.AVERIJ,
      SOORTCODE: this.SOORTCODE.SOORTCODE
    }
    if (this.NUMMER !== null && this.KLASSE.KLASSEID !== null && this.NAAM !== null && this.SOORTCODE.SOORTCODE !== null) {
      this.addSchip(schips);
      this.close();
    } else {
      this.message = 'voer in alle gegevens'
    }
  }

  save() {
    const schips: Schip = {
      NUMMER: this.NUMMER,
      KLASSE: this.KLASSE.KLASSEID,
      NAAM: this.NAAM,
      AVERIJ: this.AVERIJ,
      SOORTCODE: this.SOORTCODE.SOORTCODE
    }
    this.close();
    return this.http.put(this.apiUrl + 'schips/' + this.NUMMER, schips)
      .subscribe(data => JSON.stringify(data),
      error => alert(error),
      () => { this.getData() });

  }
  addSchip(schip: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      headers: headers
    });
    let body = schip;
    this.http.post(this.apiUrl + 'schips', body, options)
      .map((res: Response) => res.json())
      .subscribe(data => data,
      error => alert(error),
      () => { this.getData() });
  }
  verwijdergegeven(value) {
    return this.http.delete(this.apiUrl + 'schips/' + value)
      .subscribe(data => JSON.stringify(data),
      error => alert(error),
      () => { console.log(), this.getData() });
  }

  verwijdercursus(value) {
    console.log(value);
  }
  logout() {
    this.user.setUserLoggedOut();
    this.router.navigate(['']);
  }
  public onTabSelect(e) {
    console.log(e.title);
    if (e.title === "Overzicht cursussen") {
      this.http.get(this.apiUrl + 'cursus')
        .map((res: Response) => res.json())
        .subscribe(data => { this.kendoData = data; })
    }
    if (e.title === "Overzicht schepen") {
      this.http.get(this.apiUrl + 'schips')
        .map((res: Response) => res.json())
        .subscribe(data => { this.kendoData = data; });
    }
  }
}
