import { Training } from './../../interfaces/training.model';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  Action,
  on,
} from '@ngrx/store';
import { SetTrainings, SetCurrentTraining } from './trainings.actions';
import * as fromExercises from '../exercises/exercises.reducer';

/**
 * Interface do estado do meu slice de trainings do store, o que tem guardado dentro dele;
 */
export interface TrainingState {
  trainings: Training[];
  currentTraining: Training;
}

/**
 * Interface do slice de trainings do store, como ele se parece, como é
 */
export interface State extends fromExercises.State {
  trainings: TrainingState;
}

/**
 * Estado inicial a ser usado no slice de trainings do store
 */
const initialState: TrainingState = {
  trainings: [],
  currentTraining: null,
};

const reducer = createReducer(
  initialState,
  on(SetTrainings, (state, action) => {
    return {
      ...state,
      trainings: action.payload,
    };
  }),
  on(SetCurrentTraining, (state, action) => {
    return {
      ...state,
      currentTraining: action.payload,
    };
  })
);

export function trainingReducer(state = initialState, action: Action) {
  return reducer(state, action);
}

/**
 * Meu reducer que manipula meu estado atual para o slice de trainings.
 */
// export function trainingReducer(state = initialState, action: TrainingActions) {
//   switch (action.type) {
//     case SET_TRAININGS:
//       return {
//         ...state,
//         trainings: action.payload,
//       };
//     case SET_CURRENT_TRAINING:
//       return {
//         ...state,
//         currentTraining: action.payload,
//       };
//     default:
//       return state;
//   }
// }

/**
 * Cria um seletor de feature, a feature no caso é um slice do meu store, como o de trainings.
 */
export const getTrainingStoreSlice =
  createFeatureSelector<TrainingState>('trainings');

/**
 * Seletor para pegar todos os treinos a partir da slice de trainings do store
 */
export const getTrainings = createSelector(
  getTrainingStoreSlice,
  (state: TrainingState) => state.trainings
);

/**
 * Seletor para pegar o treino sendo editado a partir do slice de trainings do store.
 * Vou fazer dessa forma ao invés de ficar enviando dados na navegação e em alguns casos por input,
 * só para treino.
 */
export const getCurrentTraining = createSelector(
  getTrainingStoreSlice,
  (state: TrainingState) => state.currentTraining
);
