import { state } from '@angular/animations';
import { Action, ActionReducer, createReducer, INIT, MetaReducer, on, UPDATE } from '@ngrx/store';
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
  on(UsersActions.loginUser, state => ({
    ...state,
  })),

  on(UsersActions.loginUserSuccess, ( state, { users: {currentUser: user} } )  => ({
    ...state,
    currentUser: user,
  })),

  on(UsersActions.loginUserFailure, ( state, { error } )  => ({
    ...state,
  }))
);


function isHydrateSuccess(
  action: Action
): action is ReturnType<typeof UsersActions.hydrateSuccess> {
  return action.type === UsersActions.hydrateSuccess.type;
}

export const hydrationMetaReducer = (
  reducer: ActionReducer<IUsersState>
): ActionReducer<IUsersState> => {
  return (state, action) => {
    if (isHydrateSuccess(action)) {
      return action.state;
    } else {
      return reducer(state, action);
    }
  };
};
