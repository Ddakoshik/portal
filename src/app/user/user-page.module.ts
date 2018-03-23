import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageRoutingModule } from './user-page-routing.module';

import { MaterialModule } from '../shared/material.module';


import { UserPageComponent } from './user-page.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserAddCartComponent } from './user-add-cart/user-add-cart.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';


@NgModule({
  imports: [
    CommonModule,
    UserPageRoutingModule,
    MaterialModule
  ],
  declarations: [
    UserPageComponent,
    UserSettingsComponent,
    UserAddCartComponent,
    UserStatisticsComponent],
  exports: [
    UserPageComponent,
    UserSettingsComponent,
    UserAddCartComponent,
    UserStatisticsComponent
  ],
})
export class UserPageModule { }
