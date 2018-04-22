import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Schip } from './Models/index';

@Injectable()
export class DataService {
  schip: any = {};
  soortcursus: any = {};
  schipklasse: any = {};
  private apiUrl = 'http://zeilschoolwebapi.azurewebsites.net/api/'
  constructor(private http: Http) {
    this.getSchip();
    this.getDataSchip();
    this.getSC();
    this.getDataSchip();
  }
  getDataSchip() {
    return this.http.get(this.apiUrl + 'schips').map((res: Response) => res.json())
  }
  getSchip() {
    this.getDataSchip().subscribe(data => { console.log(data); this.schip = data });
  }

  getDataSC() {
    return this.http.get(this.apiUrl + 'soortcursus').map((res: Response) => res.json())
  }
  getSC() {
    this.getDataSC().subscribe(data => { console.log(data); this.soortcursus = data });
  }

  public vloot = [{
    nummer: 500, klasse: '16-kwadraat', naam: 'Hednrica', averij: false, soortcode: 1
  }, {
    nummer: 1054, klasse: '16-kwadraat', naam: 'Jansje', averij: false, soortcode: 1
  }, {
    nummer: 765, klasse: 'Draak', naam: 'Neetje', averij: false, soortcode: 2
  }, {
    nummer: 802, klasse: 'Draak', naam: 'Brechtje', averij: true, soortcode: 2
  }, {
    nummer: 100, klasse: 'Schouw', naam: 'Aaltje', averij: false, soortcode: 3
  }, {
    nummer: 334, klasse: 'Schouw', naam: 'De Groene Draak', averij: true, soortcode: 3
  }];
}
