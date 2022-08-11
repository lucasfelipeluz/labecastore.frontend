import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { PublicComponent } from './public.component';

const public_routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: MainComponent },

      {
        path: 'product/:id',
        component: ProductComponent,
        children: [{ path: '', component: MainComponent }],
      },
      {
        path: 'categories/:category',
        component: CategoriesComponent,
        children: [{ path: '', component: MainComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(public_routes)],
  exports: [RouterModule],
})
export class PublicRouting {}
