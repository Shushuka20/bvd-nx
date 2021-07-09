import { createReducer, on, Action } from '@ngrx/store';
import { JWT } from '../domain/auth.models';

import * as AuthActions from './auth.actions';


export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  token: JWT;
  loaded: boolean;
  error?: string | null;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  token: '',
  loaded: false,
  error: null,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loaded: false, error: null })),
  on(AuthActions.loginSuccess, (state, { authData }) =>
    ({ ...state, token: authData.token })
  ),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
