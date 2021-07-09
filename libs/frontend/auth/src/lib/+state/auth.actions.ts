import { createAction, props } from '@ngrx/store';
import { AuthData, LoginData } from '../domain/auth.models';



export const login = createAction(
  '[Login Page] Login',
  props<{ loginData: LoginData }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ authData: AuthData }>()
);

export const loginFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: any }>()
);
