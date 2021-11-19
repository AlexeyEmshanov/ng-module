import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/model/interfaces/iuser';

export const getUser = createAction(
  '[Users] Get User',
  props< { login: string, password: string} >()
);

export const getUserSuccess = createAction(
  '[Users] Get User Success',
  props<{ user: IUser[] }>()
);

export const getUserFailure = createAction(
  '[Users] Get User Failure',
  props<{ error: any }>()
);
