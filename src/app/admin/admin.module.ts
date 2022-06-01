import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { AdminRouting } from './admin.routing';

import { AdminService } from './admin.service';
import { AdminHomeModule } from './admin-home/admin-home.module';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminProductModule } from './admin-product/admin-product.module';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';




@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLoginComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule,
    AdminRouting,

    AdminHomeModule,
    AdminProductModule
  ],
  exports: [
    
  ],
  providers: []
})
export class AdminModule { }
