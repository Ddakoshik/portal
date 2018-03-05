import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { HeaderLoginComponent } from './dashboard/header/header-login/header-login.component';
import { HeaderSearchComponent } from './dashboard/header/header-search/header-search.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration.component';
import { ResetPasswordComponent } from './authorization/reset-password/reset-password.component';
import { VipCatalogComponent } from './dashboard/cart-catalog/vip-catalog/vip-catalog.component';
import { CatalogComponent } from './dashboard/cart-catalog/catalog/catalog.component';
import { AuthorizationMainComponent } from './authorization/authorization-main/authorization-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartCatalogComponent } from './dashboard/cart-catalog/cart-catalog.component';
import { HomeComponent } from './authorization/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLoginComponent,
    HeaderSearchComponent, 
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    VipCatalogComponent,
    CatalogComponent,
    AuthorizationMainComponent,
    DashboardComponent,
    CartCatalogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



