import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromTrainings from './services/trainings/trainings.reducer';
import * as fromExercises from './services/exercises/exercises.reducer';

/**
 * Crio a interface do state geral da aplicação, aqui vão conter os "acessos" e qual o tipo de state de
 * cada um. É aqui que concentro todos os reducers criados
 */
export interface State {
  trainings: fromTrainings.TrainingState;
  exercises: fromExercises.ExerciseState;
}

/**
 * Reducer geral da aplicação, que vai ser do tipo ActionReducerMap que vai receber a minha interface
 * do State do reducer geral, sendo um objeto com a chave e o valor sendo um reducer.
 */
export const reducers: ActionReducerMap<State> = {
  trainings: fromTrainings.trainingReducer,
  exercises: fromExercises.exerciseReducer,
};
