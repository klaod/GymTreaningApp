import { Unit } from './unit.model';

export interface Exercise {
  id: number;
  name: string;
  unit: Unit;
  hasRepeating: boolean;
}
