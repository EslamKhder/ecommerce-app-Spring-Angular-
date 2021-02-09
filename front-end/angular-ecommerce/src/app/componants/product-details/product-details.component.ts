import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product-service.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  idValue: number = 0;
  product: Product = new Product();
  constructor(private service: ProductServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct()
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
}
