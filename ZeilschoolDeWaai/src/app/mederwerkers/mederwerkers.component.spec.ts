/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MederwerkersComponent } from './mederwerkers.component';

let component: MederwerkersComponent;
let fixture: ComponentFixture<MederwerkersComponent>;

describe('mederwerkers component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MederwerkersComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MederwerkersComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});