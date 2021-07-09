import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import * as AuthFeature from './auth.reducer';
import { AuthData } from '../domain/auth.models';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.dataPersistence.fetch(AuthActions.login, {
      run: (
        action: ReturnType<typeof AuthActions.login>,
      ) => {
        return this.authService.login(action.loginData)
          .pipe(
            map((authData: AuthData) => AuthActions.loginSuccess({ authData: authData }))
          );
      },
      onError: (action: ReturnType<typeof AuthActions.login>, error) => {
        return AuthActions.loginFailure({ error });
      },
    })
  );

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginSuccess),
    tap((action: ReturnType<typeof AuthActions.loginSuccess>) => localStorage.setItem('jwt', action.authData.token))
  ))

  constructor(
    private readonly actions$: Actions,
    private readonly dataPersistence: DataPersistence<AuthFeature.AuthPartialState>,
    private readonly authService: AuthService
  ) {}
}
