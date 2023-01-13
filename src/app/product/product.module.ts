import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ViewComponent} from "./view/view.component";
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ViewproductshopComponent} from "./viewproductshop/viewproductshop.component";


@NgModule({
  declarations: [
    ViewComponent,
    CreateComponent,
    EditComponent,
    ViewproductshopComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        ReactiveFormsModule
    ]
})
export class ProductModule { }
