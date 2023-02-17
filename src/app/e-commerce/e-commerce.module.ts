import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [MenuComponent, HomeComponent, ImagenPipe],
  imports: [CommonModule, ECommerceRoutingModule],
})
export class ECommerceModule {}
