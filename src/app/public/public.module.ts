import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { PublicRouting } from './public.routing';

import { PublicService } from './public.service';

import { HeaderComponent } from './header/header.component';
import { PublicComponent } from './public.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PublicComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    PublicRouting,
  ],
  providers: [PublicService],
})
export class PublicModule {}
