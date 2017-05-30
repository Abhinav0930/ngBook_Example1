import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DisplayDevelopersComponent } from './display-developers/display-developers.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    DisplayDevelopersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
