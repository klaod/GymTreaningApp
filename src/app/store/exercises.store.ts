import { Action } from '@ngrx/store';

import { Exercise } from '../shared/exercise';
import { exercisesMock } from './mocks/exercises.mock';

export interface ExercisesAction extends Action {
  exercise: Exercise;
}

export const EXERCISES_ACTION_TYPE = {
  add : "add-exercise"
}

export function exercisesReducer(state: Exercise[] = exercisesMock, action: ExercisesAction): Exercise[] {
  switch (action.type) {
    case EXERCISES_ACTION_TYPE.add:
      state.push(action.exercise);
      return [].concat(state);
  }
  return state;
}