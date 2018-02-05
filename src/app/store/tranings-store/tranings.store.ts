import {Action} from '@ngrx/store';
import {Training} from '../../shared/training.model';
import {TrainingsDataState} from './trainings-data-state';
import {trainingsMock} from '../mocks/trainings.mock';
import * as moment from 'moment';

export interface TrainingsAction extends Action {
  training?: Training;
  movePayload?: {id: number, day: number};
}

export const TRAINING_ACTION_TYPE = {
  add : 'add-training',
  move: 'move-training'
};

export function trainingsReducer(state: TrainingsDataState = trainingsMock, action: TrainingsAction): TrainingsDataState {
  switch (action.type) {
    case TRAINING_ACTION_TYPE.add:
      return Object.assign({}, state, {
        trainings: [...state.trainings, action.training]
      });
    case TRAINING_ACTION_TYPE.move:
      const movedTraining = JSON.parse(JSON.stringify(state.trainings.find(training => training.id === action.movePayload.id)));
      movedTraining.time = moment(movedTraining.time).date(action.movePayload.day).valueOf();
      return Object.assign({}, state, {
        trainings: [
          ...state.trainings.filter(training => training.id !== action.movePayload.id),
          movedTraining
        ]
      });
  }
  return state;
}
