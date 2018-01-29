import { Exercise } from "../../shared/exercise";

import { unitMock } from './units.mock';

let unit = unitMock[0];
export let exercisesMock: Exercise[] = [
  { id: 0, name: "Жим", unit: unit, hasRepeating: true },
  { id: 1, name: "Становая", unit: unit, hasRepeating: true },
  { id: 2, name: "Присед", unit: unit, hasRepeating: true },
  { id: 3, name: "Разводка", unit: unit, hasRepeating: true },
  { id: 4, name: "Жим на наклонной", unit: unit, hasRepeating: true },
  { id: 5, name: "Подьем штанги на бицепс", unit: unit, hasRepeating: true },
  { id: 6, name: "Махи", unit: unit, hasRepeating: true },
  { id: 7, name: "Жим штанги стоя", unit: unit, hasRepeating: true },

];
