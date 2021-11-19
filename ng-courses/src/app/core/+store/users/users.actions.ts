import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/model/interfaces/iuser';

export const getUsers = createAction(
  '[Users] Get Users'
);

export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ data: IUser[] }>()
);

export const getUsersFailure = createAction(
  '[Users] Get Users Failure',
  props<{ error: any }>()
);
