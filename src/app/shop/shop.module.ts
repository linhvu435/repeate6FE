import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MyshopComponent } from './myshop/myshop.component';
import { MyproductshopComponent } from './myproductshop/myproductshop.component';
import { MybillshopComponent } from './mybillshop/mybillshop.component';
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    MyshopComponent,
    MyproductshopComponent,
    MybillshopComponent
  ],
    imports: [
        CommonModule,
        ShopRoutingModule
    ]
})
export class ShopModule { }
