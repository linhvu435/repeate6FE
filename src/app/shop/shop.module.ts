import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MyshopComponent } from './myshop/myshop.component';
import { MyproductshopComponent } from './myproductshop/myproductshop.component';
import { MybillshopComponent } from './mybillshop/mybillshop.component';
import {FormsModule} from "@angular/forms";
import { EditshopComponent } from './myshop/editshop/editshop.component';

@NgModule({
    declarations: [
        MyshopComponent,
        MyproductshopComponent,
        MybillshopComponent,
        EditshopComponent

    ],
    exports: [
    ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        FormsModule
    ]
})
export class ShopModule { }
