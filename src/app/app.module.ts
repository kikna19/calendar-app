import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {CalModule} from "./calendar/calendar.module";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    CalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
