import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';

import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
