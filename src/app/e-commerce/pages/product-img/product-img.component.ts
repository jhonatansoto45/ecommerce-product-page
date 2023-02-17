import { Component, OnInit } from '@angular/core';
import { ImageItem } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss'],
})
export class ProductImgComponent implements OnInit {
  urlImage: string = 'image-product-1.jpg';

  productosImg: ImageItem[] = [
    {
      name: 'image-product-1-thumbnail.jpg',
    },
    {
      name: 'image-product-2-thumbnail.jpg',
    },
    {
      name: 'image-product-3-thumbnail.jpg',
    },
    {
      name: 'image-product-4-thumbnail.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selected(image: string): void {
    const imagePath = image.replace('-thumbnail', '');
    this.urlImage = imagePath;
  }

  expand(): void {
    console.log('expand');
  }
}
