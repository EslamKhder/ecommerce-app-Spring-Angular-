import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './componants/products/products.component';
import { CategoryComponent } from './componants/category/category.component';
import {RouterModule, Routes} from '@angular/router';

// http://localhost:4200/
const routes: Routes = [
  // http://localhost:4200/products
  {path: 'products', component:ProductsComponent},
  {path: '', component:ProductsComponent},
  {path: '**', component:CategoryComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
