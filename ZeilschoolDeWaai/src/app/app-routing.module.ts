import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MederwerkersComponent } from './mederwerkers/mederwerkers.component';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  {
    path: 'login', component: LoginComponent
  },
  { path: 'medewerkers', component: MederwerkersComponent, canActivate: [GuardGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
