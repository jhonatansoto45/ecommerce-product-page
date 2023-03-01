import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../../../service/ecommerce.service';
import { CartItem } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  listeningCart: Subscription = new Subscription();

  dataItem: CartItem = { price: 0, quantity: 0 };

  result: number | null = null;

  existProduct: boolean = false;

  constructor(private eComService: EcommerceService) {}

  ngOnInit(): void {
    this.listeningCart = this.eComService.cartItem$.subscribe(
      (cartItem: CartItem) => {
        this.existProduct = cartItem.quantity > 0 ? true : false;

        this.dataItem = cartItem;
        this.total();
      }
    );
  }

  ngOnDestroy(): void {
    this.listeningCart.unsubscribe();
  }

  total(): void {
    this.result = this.eComService.totalProduct(this.dataItem);
  }

  remove():void {
    this.eComService.cartItem$.next({ price: 0, quantity: 0 })
  }
}
