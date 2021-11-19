import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { IUser } from 'src/app/model/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';
import * as UserActions from './users.actions';


@Injectable()
export class UsersEffects {

  loggedInUser$: Observable<IUser[]> = createEffect((): any => {
    return this.actions$.pipe(
      ofType(UserActions.getUser),
      tap(action => console.log('ACTION', action)),
      exhaustMap((action) => {
        console.log('inside EXHAUSTMAP', action, action.password)
        return this.authService.getUserFromServer(action.login, action.password).pipe(
          tap(user => console.log('EFFECT: ', {user}, action.login, action.password)),
          map(user => {return UserActions.getUserSuccess({ user }) }),
          catchError(error => of(UserActions.getUserFailure({ error })))
        )
      }
      )
    )
  });


  constructor(private actions$: Actions, private authService: AuthService) {}

}
