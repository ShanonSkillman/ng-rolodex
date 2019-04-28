import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Component
import { AppComponent } from './app/app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllContactsComponent } from './pages/viewallcontacts/viewallcontacts.component';
import { CreateContactsComponent } from './pages/createcontacts/createcontacts.component'
import { LoginComponent } from './pages/login/login.component';

//Shared Components
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ViewAllContactsComponent,
    CreateContactsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
