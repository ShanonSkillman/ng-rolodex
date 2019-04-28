import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllContactsComponent } from './pages/viewallcontacts/viewallcontacts.component'
import { CreateContactsComponent } from './pages/createcontacts/createcontacts.component'
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'viewallcontacts', component: ViewAllContactsComponent },
  { path: 'createcontacts', component: CreateContactsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
