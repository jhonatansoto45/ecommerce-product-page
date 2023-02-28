import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EcommerceService } from '../../../service/ecommerce.service';
import { ImageItem } from '../../interfaces/ecommerce.interface';

@Component({
  selector: 'app-popup-product',
  templateUrl: './popup-product.component.html',
  styleUrls: ['./popup-product.component.scss'],
})
export class PopupProductComponent implements OnInit {
  urlImage: string = 'image-product-1.jpg';
  popupProduct: boolean = false;

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  closePopup(): void {
    this.onClose.emit(false);
  }
}
