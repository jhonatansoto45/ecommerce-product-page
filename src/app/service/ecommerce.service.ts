import { Injectable } from '@angular/core';
import { ImageItem } from '../e-commerce/interfaces/ecommerce.interface';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  productosImg: ImageItem[] = [
    {
      name: 'image-product-1-thumbnail.jpg',
      active: true,
    },
    {
      name: 'image-product-2-thumbnail.jpg',
      active: false,
    },
    {
      name: 'image-product-3-thumbnail.jpg',
      active: false,
    },
    {
      name: 'image-product-4-thumbnail.jpg',
      active: false,
    },
  ];

  constructor() {}
}
