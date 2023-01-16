import {Component, OnInit} from '@angular/core';
import {Bill} from "../../model/Bill";
import {ProductInBillDTO} from "../../model/DTO/ProductInBillDTO";
import {ShopService} from "../../service/shopserviceM/shop.service";
import {Router} from "@angular/router";
import {BillStatus} from "../../model/BillStatus";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-mybillshop',
  templateUrl: './mybillshop.component.html',
  styleUrls: ['./mybillshop.component.css']
})
export class MybillshopComponent implements OnInit{
  bills :Bill[]=[];

  product!:ProductInBillDTO;

  billstatus!:BillStatus[];


  constructor(private showbillshop: ShopService ,private router:Router) {
  }

  ngOnInit() {
    this.showbillshop.getAllBillshop().subscribe((data) => {
      this.bills = data
      console.log(this.bills)
      this.showbillshop.getallBillStatus().subscribe((data) => {
        this.billstatus = data
      })
    })
  }

  showbillbystatus(id:number):void{
    this.showbillshop.showbillbystatus(id).subscribe((data) => {
      this.bills=data;
    })

  }
  showbillshop1():void{
    this.showbillshop.getAllBillshop().subscribe((data) => {
      this.bills = data
    })
  }
  setbillshop(idstatus:number,idbill:number):void {
    this.showbillshop.setbill(idbill, idstatus).subscribe((data) => {
      this.showbillshop.showbillbystatus(idstatus).subscribe((data) => {
        this.bills=data;

      })
    })
  }

  showbillbyidbill(id:number):void{
    this.showbillshop.showbillbyidbill(id).subscribe((data) => {
      this.product = data
    })
  }

}
