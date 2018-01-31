import {Action} from '@ngrx/store';
import {Training} from '../../shared/training.model';
import {TrainingsDataState} from './trainings-data-state';
import {trainingsMock} from '../mocks/trainings.mock';

export interface TrainingsAction extends Action {
  training: Training;
}

export const TRAINING_ACTION_TYPE = {
  add : 'add-training'
};

export function trainingsReducer(state: TrainingsDataState = trainingsMock, action: TrainingsAction): TrainingsDataState {
  switch (action.type) {
    case TRAINING_ACTION_TYPE.add:
      return Object.assign({}, state, {
        trainings: [...state.trainings, action.training]
      });
  }
  return state;
}
