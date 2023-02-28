import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../../service/ecommerce.service';
import { ImageItem } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss'],
})
export class ProductImgComponent implements OnInit {
  urlImage: string = 'image-product-1.jpg';

  popupProduct: boolean = false;

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

  closePopup(evt: boolean): void {
    if (evt) return;
    this.popupProduct = evt;
  }
}
