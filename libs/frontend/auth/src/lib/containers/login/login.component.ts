import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../../+state/auth.facade';
import { LoginData } from '../../domain/auth.models';

@Component({
  selector: 'bvd-nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login(loginData: LoginData) {
    this.authFacade.login(loginData);
  }

  constructor(private readonly authFacade: AuthFacade) { }

  ngOnInit(): void {
  }

}
