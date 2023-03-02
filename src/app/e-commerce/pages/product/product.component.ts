import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../../../service/ecommerce.service';
import { CartItem } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product: number = 0;

  readonly price: string = '$125.000';

  listeningCart: Subscription = new Subscription();

  constructor(private eCommService: EcommerceService) {}

  ngOnInit(): void {
    this.listeningCart = this.eCommService.cartItem$.subscribe(
      (cartItem: CartItem) => {
        if (cartItem.quantity === 0) this.product = 0;
      }
    );
  }

  ngOnDestroy(): void {
    this.listeningCart.unsubscribe();
  }

  moreProduct(): void {
    this.product = this.product + 1;
  }

  lessProduct(): void {
    if (this.product === 0) return;
    this.product = this.product - 1;
  }

  addCart(): void {
    this.eCommService.cartItem$.next({
      price: 125000,
      quantity: this.product === 0 ? 0 : this.product,
    });
  }
}
