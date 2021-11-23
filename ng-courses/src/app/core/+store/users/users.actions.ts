import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/model/interfaces/iuser';

export const loginUser = createAction(
  '[Users] Login User',
  props< { login: string, password: string} >()
);

export const loginUserSuccess = createAction(
  '[Users] Login User Success',
  props<{ user: IUser[] }>()
);

export const loginUserFailure = createAction(
  '[Users] Login User Failure',
  props<{ error: any }>()
);
