import { importExpr } from '@angular/compiler/src/output/output_ast';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemProductService }  from '../data/in-mem-product.service';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

import { ErrorPagesModule } from './modules/error-pages/error-pages.module';
import { IndexModule } from './modules/index/index.module';
import { AboutModule } from './modules/about/about.module';
import { ProductsModule} from './modules/products/products.module';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemProductService),
    RouterModule,
    IndexModule,
    AboutModule,
    ProductsModule,
    ErrorPagesModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
