import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData, LoginData } from '../domain/auth.models';


@Injectable()
export class AuthService {
  constructor(
    @Inject('api_url') private api_url: string,
    private httpClient: HttpClient
  ) { }
  
  public login(loginData: LoginData) {
    return this.httpClient.post<AuthData>(this.api_url + 'auth/login', loginData);
  }
}
