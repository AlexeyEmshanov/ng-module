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
      ofType(UserActions.getUser),
      exhaustMap((action) => {
        return this.authService.getUserFromServer(action.login, action.password).pipe(
          map(user => UserActions.getUserSuccess({ user }) ),
          catchError(error => {
            console.log(error);
            return of(UserActions.getUserFailure({ error }))
          })
        )
      }
      )
    )
  });

  constructor(private actions$: Actions, private authService: AuthService) {}

}
