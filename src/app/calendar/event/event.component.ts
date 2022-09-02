import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent implements OnInit {
  form!: FormGroup;
  date: any;
  title: string = '';

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: [date: Date, id: number],
    private calendarService: CalendarService
  ) {
    this.date = data[0];
  }

  ngOnInit(): void {
    this.initForm();
  
    
  }


  initForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      date: [this.date, Validators.required]
    })
  }

  get(control: string) {
    return this.form.get(control)?.value
  }

  createEvent(): void {
    this.calendarService.createEvent({
      start: new Date(this.get('date')),
      end: new Date(this.get('date')),
      title: this.get('title'),
      draggable: true,
      id: this.data[1],
    });
  }

}
