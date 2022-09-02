import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

 event$ = new BehaviorSubject<CalendarEvent[]>([]);
 event: CalendarEvent[] = [];

  constructor() { }

  createEvent(event: CalendarEvent): void{
    this.event.push(event)
    this.event$.next(this.event);
  }
}
