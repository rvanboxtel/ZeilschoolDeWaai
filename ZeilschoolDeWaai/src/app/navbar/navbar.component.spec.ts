﻿/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { NavbarComponent } from './navbar.component';

let component: NavbarComponent;
let fixture: ComponentFixture<NavbarComponent>;

describe('Navbar component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NavbarComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});