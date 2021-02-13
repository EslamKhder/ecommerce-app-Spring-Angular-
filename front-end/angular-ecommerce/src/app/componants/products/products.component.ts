import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import {ActivatedRoute} from '@angular/router';
import {CartItem} from '../../model/cart-item';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  idValue: number = 0;
  keyValue: string = "";
  page: number = 1; // 0 1 2 3 4 5 6 7 8 9
  size: number = 10;
  numElement: number = 0; //
  constructor(private service: ProductServiceService,
              private route: ActivatedRoute,
              private cartService: CartServiceService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.getProducts()
      }
    );
  }

  getProducts() {
    let resultId = this.route.snapshot.paramMap.has("id");
    let resultKey = this.route.snapshot.paramMap.has("key");
    if (resultId) {
      this.listProductsCategories();
    } else if (resultKey) {
      this.listProductsByKey();
    } else {
      this.listProducts();
    }
  }

  listProducts() {
    this.getProductsLength()
    this.service.getProducts(this.page - 1, this.size).subscribe(
      data => {
        this.products = data
      }
    );
  }

  getProductsLength() {
    this.service.getProductsSize().subscribe(
      data => {
        this.numElement = data
      }
    )
  }

  listProductsCategories() {
    // @ts-ignore
    this.idValue = +this.route.snapshot.paramMap.get('id');
    this.getProductsLengthByCategoryId();
    this.service.getProductsCategory(this.idValue, this.page - 1, this.size).subscribe(
      data => {
        this.products = data
      }
    );
  }

  getProductsLengthByCategoryId() {
    this.service.getProductsSizeByCategoryId(this.idValue).subscribe(
      data => {
        this.numElement = data
      }
    )
  }

  listProductsByKey() {
    // @ts-ignore
    this.keyValue = this.route.snapshot.paramMap.get('key');
    this.getProductsLengthByKey()
    this.service.getProductsByKey(this.keyValue, this.page - 1, this.size).subscribe(
      data => {
        this.products = data
      }
    )
  }

  getProductsLengthByKey() {
    this.service.getProductsSizeByKey(this.keyValue).subscribe(
      data => {
        this.numElement = data
      }
    )
  }

  done() {
    this.getProducts()
  }

  editPageSize(event: Event) {
    this.size = +(<HTMLInputElement>event.target).value
    this.getProducts()
  }

  addToCart(temp: Product) {
    //console.log(temp.name + "  " + temp.unitPrice)
    const tempItem = new CartItem(temp);
    this.cartService.addToCart(tempItem);
  }
}
