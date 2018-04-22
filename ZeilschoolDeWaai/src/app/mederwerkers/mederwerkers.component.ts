import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Schip } from '../service/Models/index';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-mederwerkers',
  templateUrl: './mederwerkers.component.html',
  styleUrls: ['./mederwerkers.component.scss'],
  providers: [DataService]
})
/** mederwerkers component*/
export class MederwerkersComponent implements OnInit {
  SOORTCODE: any;
  AVERIJ: any;
  NAAM: any;
  KLASSE: any;
  NUMMER: any;
  /** mederwerkers ctor */
  public vloot: any = {};
  private apiUrl = 'http://zeilschoolwebapi.azurewebsites.net/api/'
  public gridData: any[];
  constructor(private formBuilder: FormBuilder, private data: DataService, private http: Http) {
  }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.http.get(this.apiUrl + 'schips')
      .map((res: Response) => res.json())
      .subscribe(data => { this.vloot = data; console.log(this.vloot) });

  }
  // een nieuw schip aan maken
  createNewSchip() {
    let newSchip: Schip = {
      NUMMER: this.NUMMER,
      KLASSE: this.KLASSE,
      NAAM: this.NAAM,
      AVERIJ: this.AVERIJ,
      SOORTCODE: this.SOORTCODE
    };

    this.http.post(this.apiUrl + '/schips', newSchip)
  }
}
