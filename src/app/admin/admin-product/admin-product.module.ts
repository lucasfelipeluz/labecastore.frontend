import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminProductComponent } from './admin-product.component';
import { RouterModule } from '@angular/router';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminNewProductComponent } from './admin-new-product/admin-new-product.component';



@NgModule({
  declarations: [
    AdminProductComponent,
    AdminEditProductComponent,
    AdminNewProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminProductModule { }
