import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
/** Contact component*/
export class ContactComponent {

  public items: any[] = [
    { title: 'De zeilschool', url: '../../assets/plaatje_zeilschool.jpg' }
  ];
  public width = '700px';
  public height = '400px';
    /** Contact ctor */
    constructor() {

    }
}
