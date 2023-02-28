import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EcommerceService } from '../../../service/ecommerce.service';
import { ImageItem, OnClosePopup } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-popup-product',
  templateUrl: './popup-product.component.html',
  styleUrls: ['./popup-product.component.scss'],
})
export class PopupProductComponent implements OnInit {
  urlImage: string = 'image-product-1.jpg';
  popupProduct: boolean = false;

  indexImage: number = 0;

  @Output() onClose: EventEmitter<OnClosePopup> =
    new EventEmitter<OnClosePopup>();

  constructor(private eComService: EcommerceService) {}

  ngOnInit(): void {
    this.indexImage = this.productosImg.findIndex((image) => image.active);
  }

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

  closePopup(): void {
    this.onClose.emit({ close: false, imageActive: this.urlImage });
  }
}
