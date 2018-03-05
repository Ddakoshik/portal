import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { HeaderLoginComponent } from './dashboard/header/header-login/header-login.component';
import { HeaderSearchComponent } from './dashboard/header/header-search/header-search.component';
import { VipCatalogComponent } from './dashboard/cart-catalog/vip-catalog/vip-catalog.component';
import { CatalogComponent } from './dashboard/cart-catalog/catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartCatalogComponent } from './dashboard/cart-catalog/cart-catalog.component';
import { LoginComponent } from './authorization/login/login.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './authorization/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLoginComponent,
    HeaderSearchComponent, 
    VipCatalogComponent,
    CatalogComponent,
    DashboardComponent,
    CartCatalogComponent,
    LoginComponent,
    AuthorizationComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



