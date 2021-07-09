import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const getAuthError = createSelector(
  getAuthState,
  (state: AuthState) => state.error
);

export const getJWT = createSelector(
  getAuthState,
  (state: AuthState) => state.token
)
