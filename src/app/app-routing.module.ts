import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { DashboardComponent } from './dashboard/dashboard.component';
import { CartCatalogComponent } from './dashboard/cart-catalog/cart-catalog.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },

  { path: '', component: DashboardComponent,
  children: [
    { path: '', component: CartCatalogComponent },
    { path: 'user-page', loadChildren: './user/user-page.module#UserPageModule'  },


  ]
},
  // otherwise redirect to not-found
  { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

