import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../service/shopserviceM/shop.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {min} from "rxjs";
import {Voucher} from "../../model/Voucher";
import {VoucherType} from "../../model/VoucherType";

@Component({
  selector: 'app-myproductshop',
  templateUrl: './myproductshop.component.html',
  styleUrls: ['./myproductshop.component.css']
})
export class MyproductshopComponent implements OnInit{

  products !:Product[];

  category!: Category[];

  min!:number;

  voucher!:Voucher[];

  vouchertype!:VoucherType[];


  constructor(private showbillshop: ShopService ,private router:Router) {
  }

  ngOnInit(): void {
    this.showbillshop.getAllProductMyShop().subscribe((data) => {
      this.products = data
      this.showbillshop.getallcategory().subscribe((data) => {
        this.category = data
      })
      this.showbillshop.getvoucher().subscribe((data) => {
        this.voucher = data
        console.log(this.voucher)
      })
      this.showbillshop.getvouchertype().subscribe((data) => {
        this.vouchertype = data
        console.log(this.vouchertype)
      })
    })

  }

  search(name:string,pricemin:number,pricemax:number){
    console.log(name)
    console.log(pricemin)
    console.log(pricemax)
  }

}
