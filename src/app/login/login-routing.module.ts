import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ViewAccountComponent} from "./view-account/view-account.component";



const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'create', component: RegisterComponent
  },
  {
    path: 'view', component: ViewAccountComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
