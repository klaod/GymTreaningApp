import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { MatToolbarModule, MatListModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { exercisesReducer } from './store/exercises.store';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { CalendarModule } from './calendar/calendar.module';
import { ExercisesModule } from './exercises/exercises.module';

let reducers = {
  exercises: exercisesReducer
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,    
    StoreModule.forRoot(reducers),
    LoginModule,
    CalendarModule,
    ExercisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
