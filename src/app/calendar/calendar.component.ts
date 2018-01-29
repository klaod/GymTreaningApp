import { Component, OnInit } from '@angular/core';
import { Exercise } from '../shared/exercise';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleOnSelect(exercise: Exercise) {
    console.log(exercise);
  }
}
