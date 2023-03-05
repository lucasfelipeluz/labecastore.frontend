import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './responses/not-found/not-found.component';
import { UnavailableComponent } from './responses/unavailable/unavailable.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, NotFoundComponent, UnavailableComponent],
  imports: [BrowserModule, RouterModule, AppRouting],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
