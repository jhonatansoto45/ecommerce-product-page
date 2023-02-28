export interface ImageItem {
  name: string;
  active: boolean;
}

export interface OnClosePopup {
  close: boolean;
  imageActive: string;
}

export interface CartItem {
  price: number;
  quantity: number;
}
