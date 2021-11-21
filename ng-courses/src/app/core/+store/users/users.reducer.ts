import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user';
import { IUsersState } from '.';
import * as UsersActions from './users.actions';

export const usersFeatureKey = 'users';

export const initialUsersState: IUsersState =
  {
    currentUser: new User(0 , '', { first: '', last: ''}, '', ''),
  }

export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.getUser, state => ({
    ...state,
  })),

  on(UsersActions.getUserSuccess, ( state, { user } )  => ({
    ...state,
    currentUser: user[0],
  })),

  on(UsersActions.getUserFailure, ( state, { error } )  => ({
    ...state,
  }))
);

