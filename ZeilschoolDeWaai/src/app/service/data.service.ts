import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Schip } from './Models/index';

@Injectable()
export class DataService {
  schepen = [];
  schipklasse: any = {};
  private apiUrl = 'http://zeilschoolwebapi.azurewebsites.net/api/'
  constructor(private http: Http) {
  }
  getSchepen() {
    return this.http.get(this.apiUrl + 'schips')
      .map((res: Response) => { return res.json() }).subscribe();
  }

}

