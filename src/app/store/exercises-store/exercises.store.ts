import { Action } from '@ngrx/store';

import { ExercisesDataState } from './exercises-data-state';
import { exercisesMock } from '.././mocks/exercises.mock';
import { Exercise } from '../../shared/exercise';

export interface ExercisesAction extends Action {
  exercise: Exercise;
}

export const EXERCISES_ACTION_TYPE = {
  add : "add-exercise"
}

export function exercisesReducer(state: ExercisesDataState = exercisesMock, action: ExercisesAction): ExercisesDataState {
  switch (action.type) {
    case EXERCISES_ACTION_TYPE.add:
      return Object.assign({}, state, {
        excercises: [...state.exercises, action.exercise]
      });
  }
  return state;
}


