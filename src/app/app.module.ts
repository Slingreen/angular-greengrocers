import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { CartModule } from './cart/cart.module';
import { TotalModule } from './total/total.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ItemsModule, CartModule, TotalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
