import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageRoutingModule } from './user-page-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { MaterialModule } from '../shared/material.module';


import { UserPageComponent } from './user-page.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserAddCartComponent } from './user-add-cart/user-add-cart.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';
import { UploadImgComponent } from './user-add-cart/upload-img/upload-img.component';


@NgModule({
  imports: [
    CommonModule,
    UserPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule

  ],
  declarations: [
    UserPageComponent,
    UserSettingsComponent,
    UserAddCartComponent,
    UserStatisticsComponent,
    UploadImgComponent],
  exports: [
    UserPageComponent,
    UserSettingsComponent,
    UserAddCartComponent,
    UserStatisticsComponent
  ],
})
export class UserPageModule { }
