import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { schip } from '../service/Models/index';

@Component({
  selector: 'app-mederwerkers',
  templateUrl: './mederwerkers.component.html',
  styleUrls: ['./mederwerkers.component.scss']
})
/** mederwerkers component*/
export class MederwerkersComponent implements OnInit {
  /** mederwerkers ctor */
  public schip;
  public vloot: any[] = [{
    NUMMER: 500, KLASSE: '16-kwadraat', NAAM: 'Hednrica', AVERIJ: false, SOORTCODE: 1
  }, {
    NUMMER: 1054, KLASSE: '16-kwadraat', NAAM: 'Jansje', AVERIJ: false, SOORTCODE: 1
  }, {
    NUMMER: 765, KLASSE: 'Draak', NAAM: 'Neetje', AVERIJ: false, SOORTCODE: 2
  }, {
    NUMMER: 802, KLASSE: 'Draak', NAAM: 'Brechtje', AVERIJ: true, SOORTCODE: 2
  }, {
    NUMMER: 100, KLASSE: 'Schouw', NAAM: 'Aaltje', AVERIJ: false, SOORTCODE: 3
  }, {
    NUMMER: 334, KLASSE: 'Schouw', NAAM: 'De Groene Draak', AVERIJ: true, SOORTCODE: 3
  }];
  public klasse;
  public gridData: any[] = this.vloot;
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() { }
  createNewSchip(): schip {
    return new schip();
  }

  public onTabSelect(e) {
    console.log(e);
  }
}
