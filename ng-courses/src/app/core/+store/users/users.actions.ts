import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/model/interfaces/iuser';
import { IUsersState } from '.';

export const loginUser = createAction(
  '[Users] Login User',
  props< { login: string, password: string} >()
);

export const loginUserSuccess = createAction(
  '[Users] Login User Success',
  props<{ users: IUsersState }>()
);

export const loginUserFailure = createAction(
  '[Users] Login User Failure',
  props<{ error: any }>()
);

export const hydrate = createAction(
  '[Hydrate] Hydrate',
);

export const hydrateSuccess = createAction(
  '[Hydrate] Hydrate Success',
  props<{ state: IUsersState}>()
);

export const hydrateFailure = createAction(
  '[Hydrate] Hydrate Failure',
);
