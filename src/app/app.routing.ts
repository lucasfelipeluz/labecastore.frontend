import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent }
]

export const routes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(app_routes)
