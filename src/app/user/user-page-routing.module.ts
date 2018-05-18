import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { UserPageComponent } from './user-page.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserAddCartComponent } from './user-add-cart/user-add-cart.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';
import { SettingsResolver } from './services/SettingsResolver.service';



const routes: Routes = [
    // { path: '', component: AuthComponent },
    {
    path: '', component: UserPageComponent,
    children: [
      { path: 'settings', component: UserSettingsComponent, resolve: {simpleUser: SettingsResolver}},
      { path: 'add-cart', component: UserAddCartComponent },
      { path: 'statisics', component: UserStatisticsComponent },

    ]
    }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    providers: [ SettingsResolver ],
    exports: [RouterModule]
})

export class UserPageRoutingModule { }

