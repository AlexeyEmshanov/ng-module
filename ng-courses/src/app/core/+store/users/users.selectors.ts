import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { of } from 'rxjs';
import { IUsersState } from '.';
import { IAppState } from '..';


export const selectUserState = (state: IAppState) => state.users

export const selectCurrentUserName = createSelector(
  selectUserState,
  (state: IUsersState) => state.currentUser
)

export const getUsersStateSelector = createFeatureSelector<IUsersState>('users');

export const getCurrentUserNameSelector = createSelector(
  getUsersStateSelector,
  (state: IUsersState) => state.currentUser.name.first
)
