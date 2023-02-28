import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../../service/ecommerce.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: number = 0;

  readonly price: string = '$125.000';

  constructor(private eCommService: EcommerceService) {}

  ngOnInit(): void {}

  lessProduct(): void {
    if (this.product === 0) return;
    this.product = this.product - 1;

  }

  moreProduct(): void {
    this.product = this.product + 1;
  }
}
