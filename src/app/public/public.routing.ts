import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PublicComponent } from './public.component';

const public_routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [{ path: '', component: MainComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(public_routes)],
  exports: [RouterModule],
})
export class PublicRouting {}
