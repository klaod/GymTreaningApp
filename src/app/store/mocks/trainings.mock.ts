import {TrainingsDataState} from '../tranings-store/trainings-data-state';
import {exerciseSetMock} from './exerciseSet.mock';

export const trainingsMock: TrainingsDataState = {
  trainings: [
    {
      id: 4,
      time: Date.now(),
      setList: [exerciseSetMock]
    }
  ]
};
