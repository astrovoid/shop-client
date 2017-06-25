import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
