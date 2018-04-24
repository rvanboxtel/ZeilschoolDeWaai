import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';
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
import { MedewerkersComponent } from './mederwerkers/mederwerkers.component';
import { UserService } from './service/user.service';
import { AuthguardGuard } from './service/authguard.guard';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HttpClient } from '@angular/common/http';
import { DialogModule } from '@progress/kendo-angular-dialog';



// Deze pagina is om alle modules en components samen te voegen
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    MedewerkersComponent
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
    HttpModule,
    DropDownsModule,
    DialogModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
