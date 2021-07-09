import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import { DataPersistence } from '@nrwl/angular';
import { AuthService } from './services/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './interceptors/jwt-interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LoginComponent } 
    ]),
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,

    InputTextModule,
    ButtonModule
  ],
  declarations: [
    LoginComponent, 
    LoginFormComponent
  ],
  exports: [
    LoginComponent, 
    LoginFormComponent
  ],
  providers: [
    AuthFacade, 
    DataPersistence, 
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true
    }
  ],
})
export class AuthModule {}
