import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';

const admin_routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'product/:id',
        canActivate: [AdminGuard],
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(admin_routes)],
  exports: [RouterModule],
})
export class AdminRoutes {}
