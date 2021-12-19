import { Exercise } from 'src/app/interfaces/exercise.model';
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { SetExercises, SetEditingExercise } from './exercises.actions';

/**
 * Interface do estado do meu slice de exercise do store, o que tem guardado dentro dele;
 */
export interface ExerciseState {
  exercises: Exercise[];
  editingExercise: Exercise;
}

/**
 * Interface do slice de exercise do store, como ele se parece, como é.
 * Esse só preciso para declarar o uso de states no constructor de serviços e etc.
 */
export interface State {
  exercises: ExerciseState;
}

/**
 * Estado inicial a ser usado no slice de exercises do store
 */
const initialState: ExerciseState = {
  exercises: [],
  editingExercise: null,
};

/**
 * Um reducer criado através da função de createReducer. A partir do ngrx 10 (eu acho) eles mudaram para
 * criar reducers e actions com funções. Recebe como argumento inicial o estado inicial do reducer, e
 * como segundo argumento em diante os on(), que são funções que servem como um switch, para dizer que
 * quando uma ação X for disparada, ele deve exercutar o callback declarado em frente a ele
 */
const reducer = createReducer(
  initialState,
  on(SetExercises, (state, action) => {
    return {
      ...state,
      exercises: action.payload,
    };
  }),
  on(SetEditingExercise, (state, action) => {
    return {
      ...state,
      editingExercise: action.payload,
    };
  })
);

/**
 * A função de reducer do meu slice de exercises. Talvez eu poderia até diminuir isso de alguma forma
 * já retornando um createReducer dentro, mas assim fica mais legivel.
 * Unica funcionalidade dessa função é receber um state e uma action e retonar um reducer. É preciso
 * isso para juntar tudo no ActionReducerMap
 */
export function exerciseReducer(state = initialState, action: Action) {
  return reducer(state, action);
}

/**
 * Cria um seletor de feature, a feature no caso é um slice do meu store, como o de exercises.
 */
export const getExercisesStoreSlice =
  createFeatureSelector<ExerciseState>('exercises');

/**
 * Seletor para pegar todos os exercicios a partir da slice de exercises do store
 */
export const getExercises = createSelector(
  getExercisesStoreSlice,
  (state: ExerciseState) => state.exercises
);

/**
 * Seletor para pegar o exercicio sendo editado a partir do slice de exercises do store.
 * Vou fazer dessa forma ao invés de ficar enviando dados na navegação e em alguns casos por input,
 * só para treino.
 */
export const getEditingExercise = createSelector(
  getExercisesStoreSlice,
  (state: ExerciseState) => state.editingExercise
);
