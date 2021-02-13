import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product-service.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';
import {CartItem} from '../../model/cart-item';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  idValue: number = 0;
  product: Product = new Product();
  constructor(private service: ProductServiceService,
              private route: ActivatedRoute,
              private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.getProduct()
      }
    );
  }

  public getProduct(){
    // @ts-ignore
    this.idValue = +this.route.snapshot.paramMap.get('id');
    this.service.getProductById(this.idValue).subscribe(
      data => {
        this.product = data
      }
    );
  }

  addItem(product: Product) {
    const item = new CartItem(product);
    this.cartService.addToCart(item);
  }
}
