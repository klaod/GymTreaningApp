import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';

import { SharedModule } from '../shared/shared.module';
import { DayComponent } from './day/day.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    SharedModule,
    MatGridListModule,
    MatButtonModule,
    PipesModule
  ],
  declarations: [CalendarComponent, DayComponent]
})
export class CalendarModule { }
