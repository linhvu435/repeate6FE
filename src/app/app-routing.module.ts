import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
