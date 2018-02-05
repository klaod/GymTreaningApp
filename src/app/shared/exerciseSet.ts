import {Exercise} from './exercise';


export interface ExerciseSet {
  id: number;
  exercise: Exercise;
  reps: number;
  value: number;
}
