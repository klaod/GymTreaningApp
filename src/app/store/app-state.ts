import { ExercisesDataState } from './exercises-store/exercises-data-state';
import {TrainingsDataState} from './tranings-store/trainings-data-state';

export interface AppState {
  exercisesData: ExercisesDataState;
  trainingsData: TrainingsDataState;
}
