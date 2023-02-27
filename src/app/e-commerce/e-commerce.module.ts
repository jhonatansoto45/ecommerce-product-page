import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductImgComponent } from './pages/product-img/product-img.component';
import { PopupProductComponent } from './components/popup-product/popup-product.component';

@NgModule({
  declarations: [MenuComponent, HomeComponent, ImagenPipe, CartComponent, ProductComponent, ProductImgComponent, PopupProductComponent],
  imports: [CommonModule, ECommerceRoutingModule],
})
export class ECommerceModule {}
