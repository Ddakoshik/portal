import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserAddCartComponent } from './user-add-cart/user-add-cart.component';



const routes: Routes = [
    // { path: '', component: AuthComponent },
    {
    path: '', component: UserPageComponent,
    children: [
      { path: 'settings', component: UserSettingsComponent },
      { path: 'add-cart', component: UserAddCartComponent }
    ]
    }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
