import { Exercise } from 'src/app/interfaces/exercise.model';
import { createAction, props } from '@ngrx/store';

/**
 * Os tipos de ações que tenho, só para ficar mais fácil de manipular em um lugar só
 */
export const SET_EXERCISES = '[Exercises] Set Exercises';
export const SET_EDITING_EXERCISE = '[Exercises] Set Editing Exercise';

/**
 * Ação para alterar no store o array de exercicios cadastrados.
 * A partir da versão 10 (creio eu) do ngrx é preciso criar ações com createAction. Ela recebe o tipo
 * da ação e as props que devem ser passadas pra ela. Assim, no meu reducer, sei o que estou recebendo.
 * As props precisam receber um objeto pelo visto, mas não necessáriamente precisam de um payload. eu vou
 * manter com o nome de payload exclusivamente por como estava no formato antigo de NGRX
 */
export const SetExercises = createAction(
  SET_EXERCISES,
  props<{ payload: Exercise[] }>()
);

/**
 * Ação para alterar no store o exercicio atualmente sendo editado
 */
export const SetEditingExercise = createAction(
  SET_EDITING_EXERCISE,
  props<{ payload: Exercise }>()
);
