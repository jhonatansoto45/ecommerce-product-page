import { Component, OnInit } from '@angular/core';
import { ImageItem } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-popup-product',
  templateUrl: './popup-product.component.html',
  styleUrls: ['./popup-product.component.scss'],
})
export class PopupProductComponent implements OnInit {
  urlImage: string = 'image-product-1.jpg';

  popupProduct: boolean = false;

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

  ngOnInit(): void {}

  selected(image: string): void {
    this.productosImg = this.productosImg.map((product) => ({
      ...product,
      active: product.name === image ? true : false,
    }));

    const imagePath = image.replace('-thumbnail', '');
    this.urlImage = imagePath;
  }
}
