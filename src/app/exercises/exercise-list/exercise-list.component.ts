import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material';

import { Store } from '@ngrx/store/';
import { AppState } from '../../store/app-state';
import { Exercise } from '../../shared/exercise';
import { Observable } from 'rxjs/Observable';

import { ExerciseComponent } from '../exercise/exercise.component';
import { getExercisesState } from '../../store/exercises-store/exercises-views';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  @Input() selectMode = false;
  @Output() onSelect = new EventEmitter();

  exercises: Observable<Exercise[]>;
  selectedExercise: Exercise = null;

  constructor(private store: Store<AppState>, public dialog: MatDialog) { }

  ngOnInit() {
    this.exercises = this.store.select(getExercisesState);
  }

  onClick(exercise: Exercise) {
    this.selectedExercise = exercise;
    this.selectMode? this.triggerOnSelect() : this.openDialog();
  }

  openDialog() {
    let dialogRef = this.dialog.open(ExerciseComponent, {      
      data: this.selectedExercise
    });    
  }

  triggerOnSelect() {
    this.onSelect.emit(this.selectedExercise);
  }
}
