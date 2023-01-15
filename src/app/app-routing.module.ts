import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {CartComponent} from "./cart/cart.component";
import {MybillComponent} from "./mybill/mybill.component";
import {RegistershopComponent} from "./registershop/registershop.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mybill', component: MybillComponent },
  { path: 'registershop', component: RegistershopComponent },

  { path: '', component: HomeComponent },

  { path: 'cart', component: CartComponent, },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },{
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(module => module.ShopModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
