import {ExerciseSet} from './exerciseSet';

export interface Training {
  id: number;
  time: number;
  setList: ExerciseSet[];
}
