import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../home/home/home.component";
import {ShopComponent} from "./shop.component";
import {MybillshopComponent} from "./mybillshop/mybillshop.component";
import {MyshopComponent} from "./myshop/myshop.component";
import {MyproductshopComponent} from "./myproductshop/myproductshop.component";

const routes: Routes = [
  { path: 'shop', component: ShopComponent },

  { path: '', component: ShopComponent },
  { path: 'mybillshop', component: MybillshopComponent },
  { path: 'myproductshop', component: MyproductshopComponent },
  { path: 'myshop', component: MyshopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
