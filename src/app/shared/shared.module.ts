import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExerciseListComponent } from '../exercises/exercise-list/exercise-list.component';

import { MatListModule } from '@angular/material';

let modules = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatListModule
];

let components = [
  ExerciseListComponent
];

let _exports = [].concat(modules).concat(components);

@NgModule({
  imports: modules,  
  exports: _exports,
  declarations: [
    ExerciseListComponent
  ]
}) export class SharedModule {}