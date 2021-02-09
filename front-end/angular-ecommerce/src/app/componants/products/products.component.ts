import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  idValue: number = 0;
  keyValue: string = "";
  constructor(private service: ProductServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.getProducts()
      }
    );

  }

  getProducts(){
    let resultId = this.route.snapshot.paramMap.has("id");
    let resultKey = this.route.snapshot.paramMap.has("key");
    if(resultId){
      this.listProductsCategories();
    }else if(resultKey) {
      this.listProductsMyKey();
    }else {
      this.listProducts();
    }
  }

  listProducts(){
    this.service.getProducts().subscribe(
      data => {
        this.products = data
      }
    );
  }
  listProductsCategories(){
    // @ts-ignore
    this.idValue = +this.route.snapshot.paramMap.get('id');
    this.service.getProductsCategory(this.idValue).subscribe(
      data => {
        this.products = data
      }
    );
  }
  listProductsMyKey(){
    // @ts-ignore
    this.keyValue = this.route.snapshot.paramMap.get('key');
    this.service.getProductsByKey(this.keyValue).subscribe(
      data => {
        this.products = data
      }
    )
  }

}
