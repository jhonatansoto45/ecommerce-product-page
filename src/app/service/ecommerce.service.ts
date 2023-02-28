import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CartItem,
  ImageItem,
} from '../e-commerce/interfaces/ecommerce.interface';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  cartItem$: Subject<CartItem[]> = new Subject<CartItem[]>();

  cartDataItem: CartItem[] = [];

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

  get sessionStorageLoad(): any {
    return sessionStorage.getItem(JSON.parse('cart'));
  }

  saveProduct(dataItem: CartItem, operator: '+' | '-'): void {
    if (operator !== '+') {
      this.cartDataItem = this.cartDataItem.filter(
        (item) => item.quantity !== dataItem.quantity
      );

      sessionStorage.setItem('cart', JSON.stringify(dataItem));
      this.cartItem$.next(this.cartDataItem);
      return;
    }

    sessionStorage.setItem('cart', JSON.stringify(dataItem));
    this.cartDataItem.push(dataItem);
    this.cartItem$.next(this.cartDataItem);
  }
}
