import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';

import { RouterModule } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule
  ],
  declarations: [ 
  ProductDetailComponent,
  ProductsListComponent
  ]
})
export class ProductsModule { }
