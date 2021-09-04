import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PromoCodeComponent } from './components/promo-code/promo-code.component';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartSummaryComponent,
    ProductListComponent,
    PromoCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
