import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user';
import { IUsersState } from '.';
import * as UsersActions from './users.actions';

export const usersFeatureKey = 'users';

export const initialUsersState: IUsersState =
  {
    data: new User(0 , 'testtoken', { first: 'testFirstName', last: 'testLastName'}, 'testLogin', 'testPasswors'),
  }

export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.getUsers, state => ({
    ...state,
    data: {
      ...state.data,
      name : {
        ...state.data.name,
        first: "Alex"
      }
    }
  }))
);

