import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MedewerkersComponent } from './mederwerkers/mederwerkers.component';
import { AuthguardGuard } from './service/authguard.guard';
// Alle pagina's om erheen te komen
const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'medewerkers', component: MedewerkersComponent,
    canActivate: [AuthguardGuard],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
