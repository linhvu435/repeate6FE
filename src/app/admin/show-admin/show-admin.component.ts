import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/adminService/admin.service";
import {Roles} from "../../model/Roles";
import {Account} from "../../model/Account";
import {Router} from "@angular/router";


@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.css']
})
export class ShowAdminComponent implements OnInit{
constructor(private adminservice : AdminService,private router: Router) {
}
  idStatus: number = 1;
  id: number = 1;
  S: number = 1;
  role!: Array<Roles>
  account!: Account[]

  ngOnInit(): void {
    this.adminservice.showroles().subscribe((data) => {
      console.log(data)
      this.role = data
    })
    this.showAccount()
  }
  showAccount() {
    this.adminservice.showAccountRoles(this.id).subscribe((data) => {
      console.log(this.id)
      this.account = data

    })
  }
  updateStatus(id:number,idStatus:number) {
    this.adminservice.updateStatus(id, idStatus).subscribe((data) => {
      this. showAccount();
    })
    this.router.navigate(["/admin"])
  }

  searchByname(value: string) {
    let check = "#";
    if (value[0] == check) {
      let value1 = value.replace("#", "")
      this.adminservice.searchByPhone(value1).subscribe((data) => {
        console.log(this.id)
        this.account = data
      })
    } else {
      this.adminservice.searchByname(value).subscribe((data) => {
        console.log(this.id)
        this.account = data
      })
    }
  }
}
