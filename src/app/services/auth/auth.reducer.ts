import { ExerciseState } from '../exercises/exercises.reducer';
import { SetUserId } from './auth.actions';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

export interface AuthState {
  userId: string;
}

export interface State extends ExerciseState {
  auth: AuthState;
}

const initialState: AuthState = {
  userId: null,
};

const reducers = createReducer(
  initialState,
  on(SetUserId, (state, action) => {
    return {
      ...state,
      userId: action.payload,
    };
  })
);

export function authReducer(state = initialState, action: Action) {
  return reducers(state, action);
}

export const authStoreSlice = createFeatureSelector<AuthState>('auth');
export const getUserId = createSelector(
  authStoreSlice,
  (state) => state.userId
);
