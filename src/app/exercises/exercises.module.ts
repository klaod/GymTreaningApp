import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  MatListModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatAutocompleteModule
 } from '@angular/material';

 import { SharedModule } from '../shared/shared.module';
import { ExercisesComponent } from './exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,    
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  declarations: [ExercisesComponent, ExerciseComponent],
  entryComponents: [
    ExerciseComponent
  ]
})
export class ExercisesModule { }
