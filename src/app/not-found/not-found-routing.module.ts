import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routeschild: Routes = [
    { path: '', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routeschild)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule {
}
