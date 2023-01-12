import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ShowAdminComponent } from './show-admin/show-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    ShowAdminComponent,
    EditAdminComponent,
    ProductComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
