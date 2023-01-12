import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {ShowListProductComponent} from './product/show-list-product/show-list-product.component';
import {ShowDetailProductComponent} from './product/show-detail-product/show-detail-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    ShowListProductComponent,
    ShowDetailProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class AdminModule {
}
