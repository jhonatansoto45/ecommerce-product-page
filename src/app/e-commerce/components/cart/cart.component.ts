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

  constructor(private eComService: EcommerceService) {}

  ngOnInit(): void {
    this.listeningCart = this.eComService.cartItem$.subscribe(
      (cartItem: CartItem[]) => {
        console.log(cartItem);
      }
    );
  }

  ngOnDestroy(): void {
    this.listeningCart.unsubscribe();
  }
}
