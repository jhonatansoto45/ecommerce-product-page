import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: number = 0;

  constructor() {}

  ngOnInit(): void {}

  lessProduct(): void {
    if (this.product === 0) return;
    this.product = this.product - 1;
  }

  moreProduct(): void {
    this.product = this.product + 1;
  }
}
