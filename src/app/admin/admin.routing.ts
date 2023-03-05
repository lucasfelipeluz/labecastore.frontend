import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MainComponent } from './main/main.component';

const admin_routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: '', component: MainComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(admin_routes)],
  exports: [RouterModule],
})
export class AdminRoutes {}
