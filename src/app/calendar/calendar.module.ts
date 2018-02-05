import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';

import { SharedModule } from '../shared/shared.module';
import { DayComponent } from './day/day.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from '../pipes/pipes.module';
import {TraningModule} from '../traning/traning.module';
import {TraningComponent} from '../traning/traning.component';
import {DragulaModule} from 'ng2-dragula';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatGridListModule,
    MatButtonModule,
    PipesModule,
    TraningModule,
    DragulaModule,
    MatToolbarModule
  ],
  declarations: [CalendarComponent, DayComponent],
  entryComponents: [TraningComponent]
})
export class CalendarModule { }
