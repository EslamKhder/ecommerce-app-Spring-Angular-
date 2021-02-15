import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './componants/products/products.component';
import { CategoryComponent } from './componants/category/category.component';
import {RouterModule, Routes} from '@angular/router';
import { SearchComponent } from './componants/search/search.component';
import { ProductDetailsComponent } from './componants/product-details/product-details.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './componants/cart-status/cart-status.component';
import { CartDetailsComponent } from './componants/cart-details/cart-details.component';
import { CheckOutComponent } from './componants/check-out/check-out.component';

// http://localhost:4200/
const routes: Routes = [
  // http://localhost:4200/category/id
  {path: 'category/:id', component:ProductsComponent},
  // http://localhost:4200/category/id
  {path: 'checkout', component:CheckOutComponent},
  // http://localhost:4200/category/id
  {path: 'cartdetails', component:CartDetailsComponent},
  // http://localhost:4200/search/key
  {path: 'search/:key', component:ProductsComponent},
  // http://localhost:4200/product/id
  {path: 'product/:id', component:ProductDetailsComponent},
  // http://localhost:4200/products
  {path: 'products', component:ProductsComponent},
  // http://localhost:4200/
  {path: '', component:ProductsComponent},
  {path: '**', component:ProductsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckOutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
