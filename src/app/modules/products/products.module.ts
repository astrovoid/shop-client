import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';

import { RouterModule } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductColorComponent } from './product-color/product-color.component';

import { ProductService } from './../../services/product.service'; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule
  ],
  declarations: [ 
  ProductDetailComponent,
  ProductsListComponent,
  ProductColorComponent
  ],
  providers: [ProductService]
})
export class ProductsModule { }
