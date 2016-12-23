import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
