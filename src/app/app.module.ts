import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthAdminService } from './guards/auth-admin.service';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,

    AppRouting,

    HomeModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    AuthAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
