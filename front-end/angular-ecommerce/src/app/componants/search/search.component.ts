import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../services/product-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
  }

  doSearch(key: string) {
    console.log(key)
    this.service.getProductsByKey(key).subscribe(
      data => {
        this.products = data
      }
    );
  }
}
