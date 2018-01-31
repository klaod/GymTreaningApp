import { Component, OnInit } from '@angular/core';
import { Exercise } from '../shared/exercise';
import {AppState} from '../store/app-state';
import {Store} from '@ngrx/store';
import {Training} from '../shared/training.model';
import {Observable} from 'rxjs/Observable';
import {getTrainingsState} from '../store/tranings-store/trainings-views';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import * as moment from 'moment';
import 'rxjs/add/operator/withLatestFrom';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  daysInMonth: number;
  days: Observable<{day: number, trainings: Training[]}[]>;
  trainingsState: Observable<Training[]>;
  constructor(private store: Store<AppState>) {
    const daysInMonthState: Observable<number> = Observable.of(Date.now()).map((date: number) => {
      return moment(date).daysInMonth();
    });
    this.trainingsState = this.store.select(getTrainingsState);
    this.days = daysInMonthState.withLatestFrom(this.trainingsState)
      .map(([daysInMonth, trainings]: [number, Training[]]) => {
        return new Array(daysInMonth).fill(0)
          .map( (day: number, index: number) => {
            const dayNum: number = index + 1;
            return {
              day: dayNum,
              trainings: trainings.filter((training: Training) => moment(training.time).day() === dayNum)
            };
          });
      });
  }

  ngOnInit() {
  }

  handleOnSelect(exercise: Exercise) {
    console.log(exercise);
  }
}
