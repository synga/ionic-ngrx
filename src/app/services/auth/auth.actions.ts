import { createAction, props } from '@ngrx/store';

export const SET_USER_ID = '[Auth] Set user uid';

export const SetUserId = createAction(SET_USER_ID, props<{ payload: any }>());
