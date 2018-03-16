import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserAddCartComponent } from './user-add-cart/user-add-cart.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [, UserPageComponent, UserSettingsComponent, UserAddCartComponent, UserStatisticsComponent]
})
export class UserPageModule { }
