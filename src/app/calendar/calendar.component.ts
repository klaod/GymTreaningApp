import { Component, OnInit } from '@angular/core';
import { Exercise } from '../shared/exercise';
import {AppState} from '../store/app-state';
import {Store} from '@ngrx/store';
import {Training} from '../shared/training.model';
import {Observable} from 'rxjs/Observable';
import {getTrainingsState} from '../store/tranings-store/trainings-views';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/do';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  days: Observable<{day: number, trainings: Training[]}[]>;
  trainingsState: Observable<Training[]>;
  constructor(private store: Store<AppState>) {
    this.trainingsState = store.select(getTrainingsState);
    this.days = this.getDaysDataState();
  }

  getDaysDataState(): Observable<{day: number, trainings: Training[]}[]> {
    return Observable.combineLatest(this.getCurrentMonthState(), this.trainingsState)
      .map(([date, trainings]: [number, Training[]]) => {
        return this.getDaysOfMonth(date)
          .map((day: number, index: number) => {
            const dayNum = index + 1;
            return this.getDayData(dayNum, trainings);
          });
      });
  }

  ngOnInit() {
  }

  getDayData(dayNum: number, trainings: Training[]): {day: number, trainings: Training[]} {
      return {
        day: dayNum,
        trainings: trainings.filter((training: Training) => moment(training.time).date() === dayNum)
      };
  }

  getCurrentMonthState(): Observable<number> {
    return Observable.of(Date.now());
  }

  getDaysOfMonth(date: number): number[] {
    return new Array(moment(date).daysInMonth()).fill(0);
  }
  handleOnSelect(exercise: Exercise) {
    console.log(exercise);
  }
}
