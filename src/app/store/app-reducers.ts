import { ActionReducerMap } from '@ngrx/store/src/models';
import { AppState } from './app-state';
import { exercisesReducer } from './exercises-store/exercises.store';
import { trainingsReducer } from './tranings-store/tranings.store';

export const reducers: ActionReducerMap<AppState> = {
    exercisesData: exercisesReducer ,
    trainingsData: trainingsReducer
};
