/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { HomepageComponent } from './homepage.component';

let component: HomepageComponent;
let fixture: ComponentFixture<HomepageComponent>;

describe('Homepage component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HomepageComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(HomepageComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});