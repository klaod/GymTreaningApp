import { Unit } from './unit';

export interface Exercise {
  id: number;
  name: string;
  unit: Unit;
  hasRepeating: boolean;
}
