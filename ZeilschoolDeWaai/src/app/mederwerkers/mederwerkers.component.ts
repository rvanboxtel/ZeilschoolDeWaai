import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Schip } from '../service/Models/index';
import { DataCollection } from '@progress/kendo-angular-grid/dist/es2015/data/data.collection';

@Component({
  selector: 'app-mederwerkers',
  templateUrl: './mederwerkers.component.html',
  styleUrls: ['./mederwerkers.component.scss']
})
/** mederwerkers component*/
export class MederwerkersComponent implements OnInit {
  /** mederwerkers ctor */
  public vloot;
  public klasse;
  public gridData: any[];
  constructor(private formBuilder: FormBuilder, private data: DataService) {
  }

  async ngOnInit() {
    let data = await this.data.getDataSchip();
    console.log(data);
  }
  // een nieuw schip aan maken
  //createNewSchip(): Schip {
  //  //return new Schip();
  //}

  public onTabSelect(e) {
    console.log(e);
  }
}
