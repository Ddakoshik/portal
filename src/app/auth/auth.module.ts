import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegistrationComponent],

  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LoginComponent,
    AuthComponent,
    RegistrationComponent
  ],

})
export class AuthModule { }
