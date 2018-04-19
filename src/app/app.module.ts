import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './/app-routing.module';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { environment } from './../environments/environment';

// fierbase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule} from 'angularfire2/storage';

// server
import { HttpClientModule } from '@angular/common/http';

// services
import { AuthService } from './auth/auth.service';
import { DashboardService } from './shared/services/dashboard.services';

import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { HeaderLoginComponent } from './dashboard/header/header-login/header-login.component';
import { HeaderSearchComponent } from './dashboard/header/header-search/header-search.component';
import { VipCatalogComponent } from './dashboard/cart-catalog/vip-catalog/vip-catalog.component';
import { CatalogComponent } from './dashboard/cart-catalog/catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartCatalogComponent } from './dashboard/cart-catalog/cart-catalog.component';





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

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



