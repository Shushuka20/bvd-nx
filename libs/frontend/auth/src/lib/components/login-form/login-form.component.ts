import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from '../../domain/auth.models';

@Component({
  selector: 'bvd-nx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() public loginSubmit: EventEmitter<LoginData> = new EventEmitter<LoginData>();

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  public submitForm(): void {
    if(this.loginForm.valid)
      this.loginSubmit.emit(this.loginForm.value);

    return
  }

  constructor() { }

  ngOnInit(): void {
  }

}
