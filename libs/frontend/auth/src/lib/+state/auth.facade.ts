import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { JWT, LoginData } from '../domain/auth.models';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  public token$: Observable<JWT> = this.store.select(AuthSelectors.getJWT);

  constructor(
    private readonly store: Store,
  ) {}

  public login(loginData: LoginData) {
    console.log(1);
    this.store.dispatch(AuthActions.login({ loginData }))
  }
}
