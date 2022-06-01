import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeComponent } from './admin-home.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminWelcomeComponent,
    AdminMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminHomeModule { }
