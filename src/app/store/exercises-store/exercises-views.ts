import { AppState } from "../app-state";
import { createSelector } from "@ngrx/store";

export function getExercisesDataState(appState: AppState) {
    return appState.exercisesData;
}

export const getExercisesState = createSelector(getExercisesDataState, (exercisesData) => {
    return exercisesData.exercises;
});