/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MedewerkersComponent } from './mederwerkers.component';

let component: MedewerkersComponent;
let fixture: ComponentFixture<MedewerkersComponent>;

describe('mederwerkers component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MedewerkersComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MedewerkersComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});