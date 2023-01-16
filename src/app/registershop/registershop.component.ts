import {Component, ElementRef, ViewChild} from '@angular/core';
import {Roles} from "../model/Roles";
import {Account} from "../model/Account";
import {finalize, Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import Swal from "sweetalert2";
import {ShopService} from "../service/shopserviceM/shop.service";
import {ShopAddress} from "../model/ShopAddress";
import {Shop} from "../model/Shop";

@Component({
  selector: 'app-registershop',
  templateUrl: './registershop.component.html',
  styleUrls: ['./registershop.component.css']
})
export class RegistershopComponent {
  id: any;
  shopaddresss:ShopAddress[]=[];

  shop!:Shop;

  downloadURL: Observable<string> | undefined;

  name!:string;

  ShopAdress!:ShopAddress;



  constructor(private adminService: ShopService, private router: Router, private route: ActivatedRoute, private storage: AngularFireStorage) {

  }


  ngOnInit(): void {
    this.adminService.getallshopaddress().subscribe((data) => {
      this.shopaddresss=data;
    })
  }


  registershop() {
    this.shop.name=this.name;
    this.shop.shopAddress=this.ShopAdress;
    this.adminService.registershop(this.shop).subscribe((data) => {
      this.messagePassSuccess();
    }
      ,(error)=>{
        this.messagePassFail()
      }
    )

    this.router.navigate(["/myshop"]);
  }






  messagePassSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đăng kí bán hàng thành công !',
      showConfirmButton: false,
      timer: 1500
    })
  }

  messagePassFail() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Có lỗi xảy ra ! ',
      showConfirmButton: false,
      timer: 1500
    })

  }
}
