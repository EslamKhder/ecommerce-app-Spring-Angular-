import { Injectable } from '@angular/core';
import {CartItem} from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItems : CartItem[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor() { }

  addToCart(theCartItem: CartItem){
    let alreadyExistInCart: boolean = false;
    // @ts-ignore
    let existingCartItem: CartItem = undefined;
    if(this.cartItems.length > 0){
      for (let temp of this.cartItems) {
        if(temp.id === theCartItem.id){
          existingCartItem = temp;
          break;
        }
      }
    }
    alreadyExistInCart = (existingCartItem != undefined);
    if(alreadyExistInCart){
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem)
    }
    this.computeCartTotals();
  }

  private computeCartTotals() {
    let totalQuantityValue: number = 0;
    let totalPriceValue: number = 0;
    for (let temp of this.cartItems) {
      totalQuantityValue += temp.quantity;
      // @ts-ignore
      totalPriceValue += temp.quantity * temp.unitPrice;
    }
    this.totalQuantity = totalQuantityValue;
    this.totalPrice = totalPriceValue;
  }
}
