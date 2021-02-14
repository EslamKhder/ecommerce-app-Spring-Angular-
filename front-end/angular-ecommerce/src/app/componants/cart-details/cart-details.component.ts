import { Component, OnInit } from '@angular/core';
import {CartItem} from '../../model/cart-item';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems : CartItem[] = [];
  price: number = 0;
  total: number = 0;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.showData()
  }
  showData(){
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalQuantity.subscribe(
      data => {
        this.total = data
      }
    );
    this.cartService.totalPrice.subscribe(
      data => {
        this.price = data
      }
    )
    this.cartService.computeCartTotals();
  }

  addItem(temp: CartItem) {
    this.cartService.addToCart(temp)
  }

  removeItem(temp: CartItem){
    this.cartService.removeItem(temp);
  }

  remove(tempCartItem: CartItem) {
    this.cartService.remove(tempCartItem);
  }
}
