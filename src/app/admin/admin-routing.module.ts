import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShowListProductComponent} from "./product/show-list-product/show-list-product.component";
import {ShowDetailProductComponent} from "./product/show-detail-product/show-detail-product.component";
import {UpdateProductComponent} from "./product/update-product/update-product.component";


const routes: Routes = [
  {
    path : 'detail/:id' , component: ShowDetailProductComponent
  },
  {
    path : '' , component: ShowListProductComponent
  },
  {
    path : 'list' , component: ShowListProductComponent
  },
  {
    path : 'update' , component: UpdateProductComponent
  },
  {
    path : 'update/:id' , component: UpdateProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
