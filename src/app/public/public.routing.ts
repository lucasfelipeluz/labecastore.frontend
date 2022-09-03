import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { PublicComponent } from './public.component';
import { SearchComponent } from './search/search.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

const public_routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: MainComponent },

      {
        path: 'product/:id',
        component: ProductComponent,
      },
      {
        path: 'categories/:category',
        component: CategoriesComponent,
      },
      {
        path: 'suggestion',
        component: SuggestionComponent,
      },
      {
        path: 'search/:keyword',
        component: SearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(public_routes)],
  exports: [RouterModule],
})
export class PublicRouting {}
