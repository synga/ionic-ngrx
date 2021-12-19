import { Training } from './../../interfaces/training.model';
import { Action, createAction, props } from '@ngrx/store';

/**
 * Os tipos de ações que tenho, só para ficar mais fácil de manipular em um lugar só
 */
export const SET_TRAININGS = '[Training] Set Trainings';
export const SET_CURRENT_TRAINING = '[Training] Set Current Training';

/**
 * Ação para alterar no store o array de treinos realizados.
 */
export const SetTrainings = createAction(
  SET_TRAININGS,
  props<{ payload: Training[] }>()
);

/**
 * Ação para alterar no store o array do treino atual sendo realizado.
 */
export const SetCurrentTraining = createAction(
  SET_CURRENT_TRAINING,
  props<{ payload: Training }>()
);
