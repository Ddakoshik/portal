import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';



import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    FormsModule,
    AuthRoutingModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LoginComponent,
    AuthComponent,
    RegistrationComponent
  ],
  providers: [AuthService],

})
export class AuthModule { }
