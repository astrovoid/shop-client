import { importExpr } from '@angular/compiler/src/output/output_ast';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

import { ProductService } from './services/product.service'; 

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemProductService }  from '../data/in-mem-product.service';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

import { IndexModule } from './modules/index/index.module';
import { AboutModule } from './modules/about/about.module';
import { ProductsModule} from './modules/products/products.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemProductService),
    RouterModule,
    IndexModule,
    AboutModule,
    ProductsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
