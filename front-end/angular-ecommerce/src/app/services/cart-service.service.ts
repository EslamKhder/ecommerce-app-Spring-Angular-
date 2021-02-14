import { Injectable } from '@angular/core';
import {CartItem} from '../model/cart-item';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItems : CartItem[] = [];
  totalQuantity: Subject<number> = new Subject<number>();
  totalPrice: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){
    let alreadyExistInCart: boolean = false;
    // @ts-ignore
    let existingCartItem: CartItem | undefined = undefined;
    if(this.cartItems.length > 0){
      /*for (let temp of this.cartItems) {
        if(temp.id === theCartItem.id){
          existingCartItem = temp;
          break;
        }
      }*/
      existingCartItem = this.cartItems.find(temp => temp.id == theCartItem.id);
    }
    alreadyExistInCart = (existingCartItem != undefined);
    if(alreadyExistInCart){
      // @ts-ignore
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem)
    }
    this.computeCartTotals();
  }

  public computeCartTotals() {
    let totalQuantityValue: number = 0;
    let totalPriceValue: number = 0;
    for (let temp of this.cartItems) {
      totalQuantityValue += temp.quantity;
      // @ts-ignore
      totalPriceValue += temp.quantity * temp.unitPrice;
    }
    this.totalQuantity.next(totalQuantityValue)
    this.totalPrice.next(totalPriceValue)
  }

}
