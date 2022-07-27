import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AuthAdminService } from './guards/auth-admin.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './responses/not-found/not-found.component';
import { UnavailableComponent } from './responses/unavailable/unavailable.component';

const app_routes: Routes = [
  {
    path: 'admin',
    /* canActivate: [AuthAdminService], */ loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: '', component: HomeComponent },
  // { path: '', component: UnavailableComponent },
  // { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
})
export class AppRouting {}
