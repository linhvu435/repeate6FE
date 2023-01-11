import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowAdminComponent} from "./show-admin/show-admin.component";
import {EditAdminComponent} from "./edit-admin/edit-admin.component";

const routes: Routes = [
  {
    path: '',component:ShowAdminComponent
  },
  {
    path: 'edit/:id', component: EditAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
