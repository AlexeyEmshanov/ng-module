import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { of } from 'rxjs';
import { IUsersState } from '.';
import { IAppState } from '..';


export const getUsersStateSelector = createFeatureSelector<IUsersState>('users');

export const getCurrentUserNameSelector = createSelector<IAppState, IUsersState, string>(
  getUsersStateSelector,
  (state: IUsersState): string => {
    return state.currentUser.name.first
  }
)
