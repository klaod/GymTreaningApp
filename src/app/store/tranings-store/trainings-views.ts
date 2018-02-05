import {TrainingsDataState} from './trainings-data-state';
import {AppState} from '../app-state';
import {createSelector} from '@ngrx/store';

export function getTrainingsDataState(appState: AppState): TrainingsDataState {
  return appState.trainingsData;
}

export const getTrainingsState = createSelector( getTrainingsDataState, (trainingsData: TrainingsDataState) => {
  return trainingsData.trainings;
});
