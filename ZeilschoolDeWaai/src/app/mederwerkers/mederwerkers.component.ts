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

@Component({
  selector: 'app-mederwerkers',
  templateUrl: './mederwerkers.component.html',
  styleUrls: ['./mederwerkers.component.scss']
})
/** mederwerkers component*/
export class MederwerkersComponent implements OnInit {
  public opened = false;
  public dataSaved = false;
  NUMMER;
  KLASSE;
  NAAM;
  AVERIJ;
  SOORTCODE;
  /** mederwerkers ctor */
  public vloot: any = {};
  private apiUrl = 'http://zeilschoolwebapi.azurewebsites.net/api/'
  public gridData: any[];
  constructor(private formBuilder: FormBuilder, private http: Http) {
  }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.http.get(this.apiUrl + 'schips')
      .map((res: Response) => res.json())
      .subscribe(data => { this.vloot = data; console.log(this.vloot) });

  }
  // een nieuw schip maken

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
    this.NUMMER = null, this.KLASSE = null, this.NAAM = '', this.AVERIJ = false, this.SOORTCODE = null;
  }

  public submit() {
    this.dataSaved = true;
    console.log(this.NUMMER, this.KLASSE, this.NAAM, this.AVERIJ, this.SOORTCODE);
    const schip: Schip = {
      NUMMER: this.NUMMER,
      KLASSE: this.KLASSE,
      NAAM: this.NAAM,
      AVERIJ: this.AVERIJ,
      SOORTCODE: this.SOORTCODE
    }
    this.addSchip(schip);
    this.close();
  }
  addSchip(schip: any) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({
      headers: headers
    });
    let body = JSON.stringify(schip);
    return this.http.post(this.apiUrl + 'schips', body, options).map((res: Response) => res.json()).subscribe(data => JSON.stringify(data), error => alert (error), () => console.log("finished"));
  }
}
