import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { CalendarService } from './calendar.service';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  selected: Date = new Date();
  activeDayIsOpen: boolean = true;
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Day;
  viewDate = new Date();
  dayStartHour = new Date().getDay();
  id: number = 0;


  constructor(
    private dialog: MatDialog,
    public calendarService: CalendarService
  ) {
  }

  ngOnInit(): void { }

  setEvent(): void {
    this.id += 1;
    this.dialog.open(EventComponent, {
      width: '30rem',
      height: '25rem',
      data: [this.viewDate, this.id],
    });
  }


  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.calendarService.event = this.calendarService.event.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.calendarService.event$.next(this.calendarService.event);
  }

  deleteEvent(e: any): void {
    this.calendarService.event = this.calendarService.event.filter(event => event !== e.event);
    this.calendarService.event$.next(this.calendarService.event);
  }

}