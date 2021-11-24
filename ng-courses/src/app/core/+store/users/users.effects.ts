import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, CreateEffectMetadata, ofType, OnInitEffects } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Action, TypedAction } from '@ngrx/store/src/models';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, distinctUntilChanged, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { IUser } from 'src/app/model/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';
import { IUsersState } from '.';
import * as UserActions from './users.actions';


@Injectable()
export class UsersEffects implements OnInitEffects {

  loggedInUser$ = createEffect((): Observable<Action> => {
    return this.actions$.pipe(
      ofType(UserActions.loginUser),
      exhaustMap( (action) => this.getUserFromService(action.login, action.password) )
    )
  });


  hydrate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.hydrate),
      map(() => {
        const storageValue = localStorage.getItem("userState");
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            return UserActions.hydrateSuccess({ state: state });
          } catch {
            localStorage.removeItem("userState");
          }
        }
        return UserActions.hydrateFailure();
      })
    )
  )

  serialize$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.hydrateSuccess, UserActions.hydrateFailure),
        switchMap(() => this.store),
        distinctUntilChanged(),
        // tap((state) => localStorage.setItem("userState", JSON.stringify([state])))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router, private store: Store<IUsersState>) {}

  getUserFromService(login: string, password: string): Observable<TypedAction<'[Users] Login User Success' | '[Users] Login User Failure'>> {
    return this.authService.getUserFromServer(login, password).pipe(
      map(user => {
        localStorage.setItem('userState', JSON.stringify({ currentUser: user[0] }))
        this.router.navigate(['courses']);
        return UserActions.loginUserSuccess({ users: { currentUser: user[0] }  })
      }),
      catchError(error => {
        console.log(error);
        return of(UserActions.loginUserFailure({ error }))
      })
    )
  }

  ngrxOnInitEffects(): Action {
    return UserActions.hydrate();
  }
}
