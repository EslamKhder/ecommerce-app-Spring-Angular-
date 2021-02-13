import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  price: number = 0;
  total: number = 0;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus(){
    this.total = this.cartService.totalQuantity;
    this.price = this.cartService.totalPrice;
  }

}
