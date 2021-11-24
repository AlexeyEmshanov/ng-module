import { state } from '@angular/animations';
import { Action, ActionReducer, createReducer, INIT, MetaReducer, on, UPDATE } from '@ngrx/store';
import { User } from 'src/app/model/user';
import { IUsersState } from '.';
import * as UsersActions from './users.actions';
import { AuthService } from 'src/app/services/auth.service';


export const usersFeatureKey = 'users';


export const initialUsersState: IUsersState =
  {
    currentUser: new User(0 , '', { first: '', last: ''}, '', ''),
  }

export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.loginUser, state => {
    console.log('loginUser: ', state)

    return ({
    ...state,
  })}),

  on(UsersActions.loginUserSuccess, ( state, { users: {currentUser: user} } )  => {
    console.log('loginUserSuccess: ', state, user);
    return ({
    ...state,
    // ...state.currentUser,
    currentUser: user,
  })}),

  on(UsersActions.loginUserFailure, ( state, { error } )  => ({
    ...state,
  }))
);

// export const hydrationMetaReducer = (reducer: ActionReducer<IUsersState>): ActionReducer<IUsersState> => {
//   console.log('META START', reducer)
//   return (state, action) => {
//     console.log('META', action.type === UPDATE)
//     if (action.type === INIT || action.type === UPDATE) {
//       const storageValue = localStorage.getItem('userState');
//       if (storageValue) {
//         try {
//           console.log({storageValue})
//           return JSON.parse(storageValue)
//         } catch {
//           localStorage.removeItem('userState')
//         }
//       }
//     }

//     const nextState = reducer(state, action);
//     localStorage.setItem("userState", JSON.stringify(nextState))
//     return nextState;
//   }

// }

/* SECOND TRY*/

function isHydrateSuccess(
  action: Action
): action is ReturnType<typeof UsersActions.hydrateSuccess> {
  console.log('FUNCTION: ', action.type, action.type === UsersActions.hydrateSuccess.type)
  return action.type === UsersActions.hydrateSuccess.type;
}

export const hydrationMetaReducer2 = (
  reducer: ActionReducer<IUsersState>
): ActionReducer<IUsersState> => {
  console.log('META REDUCER 2');
  return (state, action) => {
    console.log('META REDUCER 2',isHydrateSuccess(action), state)
    if (isHydrateSuccess(action)) {
      console.log('META REDUCER 3', state, action.state);
      return action.state;
    } else {
      return reducer(state, action);
    }
  };
};
