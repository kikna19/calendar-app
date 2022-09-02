import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { EventComponent } from './event/event.component';
import { CalendarComponent } from './calendar.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {CalendarCommonModule, CalendarDayModule, CalendarMonthModule, CalendarWeekModule} from "angular-calendar";



@NgModule({
  declarations: [
    CalendarComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CalendarCommonModule,
    CalendarDayModule,
    CalendarWeekModule,
    CalendarMonthModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalModule { }
