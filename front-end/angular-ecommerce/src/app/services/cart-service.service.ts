import { Injectable } from '@angular/core';
import {CartItem} from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  products : CartItem[] = [];

  constructor() { }
}
