import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../../service/ecommerce.service';
import { ImageItem, OnClosePopup } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss'],
})
export class ProductImgComponent implements OnInit {
  urlImage: string = 'image-product-1.jpg';

  popupProduct: boolean = false;

  indexImage: number = 0;

  constructor(private eComService: EcommerceService) {}

  ngOnInit(): void {}

  get productosImg(): ImageItem[] {
    return [...this.eComService.productosImg];
  }

  selected(image: string): void {
    this.eComService.productosImg = this.eComService.productosImg.map(
      (product) => ({
        ...product,
        active: product.name === image ? true : false,
      })
    );

    const imagePath = image.replace('-thumbnail', '');
    this.urlImage = imagePath;
  }

  expand(): void {
    if (this.popupProduct) return;

    this.popupProduct = true;
  }

  activePopup({ close, imageActive }: OnClosePopup): void {
    if (close) return;
    this.popupProduct = close;
    this.urlImage = imageActive;
  }

  next(): void {
    if (this.indexImage === this.productosImg.length - 1) {
      this.indexImage = -1;
    }

    this.indexImage = ++this.indexImage;

    const { name } = this.productosImg.find((_, i) => i === this.indexImage)!;

    this.selected(name);
  }

  previous(): void {
    if (this.indexImage === 0) this.indexImage = this.productosImg.length;

    this.indexImage = --this.indexImage;

    const { name } = this.productosImg.find((_, i) => i === this.indexImage)!;

    this.selected(name);
  }
}
