import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { AuthorizationComponent }      from './authorization/authorization.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { LoginComponent }      from './authorization/login/login.component';
import { RegistrationComponent }      from './authorization/registration/registration.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'authorization/login', component: LoginComponent },
  { path: 'authorization/registration', component: RegistrationComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

