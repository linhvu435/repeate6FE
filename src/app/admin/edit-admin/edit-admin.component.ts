import { Component } from '@angular/core';
import { Roles } from 'src/app/model/Roles';
import {Account} from "../../model/Account";
import {FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../service/adminService/admin.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
  id: any;
  role!: Array<Roles>
  account: Account = new Account();
  editForm = new FormGroup({
    name: new FormControl(this.account.name),
    username: new FormControl(this.account.username),
    email: new FormControl(this.account.email),
    phoneNumber: new FormControl(this.account.phoneNumber),
    birthday: new FormControl(this.account.birthday),
    date: new FormControl(this.account.date),
    address: new FormControl(this.account.address),
    img: new FormControl(this.account.img),
    status: new FormControl(this.account.status),
    roles: new FormControl(this.account.roles),
  });

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.adminService.findById(this.id).subscribe((data) => {
        this.account = data
        this.editForm = new FormGroup({
          name: new FormControl(this.account.name),
          username: new FormControl(this.account.username),
          email: new FormControl(this.account.email),
          phoneNumber: new FormControl(this.account.phoneNumber),
          birthday: new FormControl(this.account.birthday),
          date: new FormControl(this.account.date),
          address: new FormControl(this.account.address),
          img: new FormControl(this.account.img),
          status: new FormControl(this.account.status),
          roles: new FormControl(this.account.roles),
        })
      })
    })

    this.adminService.showroles().subscribe((data)=>{
      console.log(data)
      this.role=data
    })
  }


  edit() {
    this.adminService.updateProduct(this.id,this.editForm.value).subscribe();
    this.router.navigate(["/admin"]);
  }
}
