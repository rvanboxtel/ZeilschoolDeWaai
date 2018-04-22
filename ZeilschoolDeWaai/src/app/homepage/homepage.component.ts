import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
/** Homepage component*/
export class HomepageComponent implements OnInit {
  /** Homepage ctor */
  // de foto's in een array
  public items: any[] = [
    { title: 'De zeilschool', url: '../../assets/plaatje_zeilschool.jpg' },
    { title: 'De vloot', url: '../../assets/wadtocht.jpg' }
  ];
  // hoogte/breedte van de foto's
  public width = '700px';
  public height = '400px';
  constructor() {

  }

 

  ngOnInit() {
  }

}
