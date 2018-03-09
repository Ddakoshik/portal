import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    AuthRoutingModule,
    CommonModule
  ],
  exports: [
    LoginComponent,
    AuthComponent,
    RegistrationComponent
  ],

})
export class AuthModule { }
