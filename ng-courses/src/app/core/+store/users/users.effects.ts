import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { Action, TypedAction } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { IUser } from 'src/app/model/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from './users.actions';


@Injectable()
export class UsersEffects {

  loggedInUser$ = createEffect((): Observable<Action> => {
    return this.actions$.pipe(
      ofType(UserActions.loginUser),
      exhaustMap( (action) => this.getUserFromService(action.login, action.password) )
    )
  });

  constructor(private actions$: Actions, private authService: AuthService) {}

  getUserFromService(login: string, password: string): Observable<TypedAction<'[Users] Login User Success' | '[Users] Login User Failure'>> {
    return this.authService.getUserFromServer(login, password).pipe(
      map(user => UserActions.loginUserSuccess({ user }) ),
      catchError(error => {
        console.log(error);
        return of(UserActions.loginUserFailure({ error }))
      })
    )
  }
}
