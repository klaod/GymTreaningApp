import { Exercise } from "./exercise";

export interface Set {
  id: number;
  date: Date,
  exercise: Exercise;
  reps: number;
  value: number;
}
