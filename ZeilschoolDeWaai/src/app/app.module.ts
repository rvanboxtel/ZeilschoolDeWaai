import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid'
import { LayoutModule } from '@progress/kendo-angular-layout';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MederwerkersComponent } from './mederwerkers/mederwerkers.component';
import { UserService } from './service/user.service';
import { AuthguardGuard } from './service/authguard.guard';
import { DataService } from './service/data.service';


// Deze pagina is om alle modules en components samen te voegen
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    MederwerkersComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule,
    RippleModule,
    ScrollViewModule,
    FormsModule,
    DialogsModule,
    GridModule,
    HttpModule
  ],
  providers: [UserService, AuthguardGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
