import {Product} from './product';

export class CartItem {

  id: number | undefined;
  name: string | undefined;
  unitPrice: number;
  imageUrl: string | undefined;
  quantity: number;


  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    // @ts-ignore
    this.unitPrice = product.unitPrice;
    this.imageUrl = product.imageUrl;
    this.quantity = 1;
  }
}
