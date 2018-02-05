import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import {MatToolbarModule, MatListModule, MatButtonModule, MatSidenavModule, MatCardModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app-reducers';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { CalendarModule } from './calendar/calendar.module';
import { ExercisesModule } from './exercises/exercises.module';
import {DragAndDropModule} from './drag-and-drop/drag-and-drop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    MatSidenavModule,
    LoginModule,
    CalendarModule,
    ExercisesModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
