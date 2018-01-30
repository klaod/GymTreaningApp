import { ActionReducerMap } from "@ngrx/store/src/models";
import { AppState } from "./app-state";
import { exercisesReducer } from "./exercises-store/exercises.store"

export const reducers: ActionReducerMap<AppState> = {
    exercisesData: exercisesReducer 
};