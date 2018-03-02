import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './dashboard/header/header-main/header-main.component';
import { HeaderLoginComponent } from './dashboard/header/header-login/header-login.component';
import { HeaderSearchComponent } from './dashboard/header/header-search/header-search.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration.component';
import { ResetPasswordComponent } from './authorization/reset-password/reset-password.component';
import { VipCatalogComponent } from './dashboard/cart-catalog/vip-catalog/vip-catalog.component';
import { CatalogComponent } from './dashboard/cart-catalog/catalog/catalog.component';
import { CatalogMainComponent } from './dashboard/cart-catalog/catalog-main/catalog-main.component';
import { AuthorizationMainComponent } from './authorization/authorization-main/authorization-main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderLoginComponent,
    HeaderSearchComponent, 
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    VipCatalogComponent,
    CatalogComponent,
    CatalogMainComponent,
    AuthorizationMainComponent
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



