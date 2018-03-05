import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './authorization/home/index';
import { LoginComponent } from './authorization/login/index';
import { RegistrationComponent } from './authorization/registration/index';
import { AuthGuard } from './/shared/guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);