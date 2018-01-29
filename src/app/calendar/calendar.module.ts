import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';

import { SharedModule } from '../shared/shared.module';
import { DayComponent } from './day/day.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CalendarComponent, DayComponent]
})
export class CalendarModule { }
