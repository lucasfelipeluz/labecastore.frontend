import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';

import { environment } from 'src/environments/environment';
import { NotFoundComponent } from './responses/not-found/not-found.component';
import { UnavailableComponent } from './responses/unavailable/unavailable.component';

const app_routes: Routes = [];

if (environment.run === true) {
  app_routes.push({
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  });
  app_routes.push({
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  });
}

if (environment.run === false) {
  app_routes.push({
    path: '',
    component: UnavailableComponent,
  });
  app_routes.push({ path: '**', component: UnavailableComponent });
}

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
})
export class AppRouting {}
