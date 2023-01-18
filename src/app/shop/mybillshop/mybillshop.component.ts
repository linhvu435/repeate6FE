import {Component, OnInit} from '@angular/core';
import {Bill} from "../../model/Bill";
import {ProductInBillDTO} from "../../model/DTO/ProductInBillDTO";
import {ShopService} from "../../service/shopserviceM/shop.service";
import {Router} from "@angular/router";
import {BillStatus} from "../../model/BillStatus";
import {Product} from "../../model/Product";
import {BillStatusDTO} from "../../model/Dtos/BillStatusDTO";

@Component({
  selector: 'app-mybillshop',
  templateUrl: './mybillshop.component.html',
  styleUrls: ['./mybillshop.component.css']
})
export class MybillshopComponent implements OnInit{
  stars  = [1,2,3,4,5]

  rating =3;
  bills :Bill[]=[];

  product!:ProductInBillDTO;

  billstatus!:BillStatus[];

  billstatusDTO!:BillStatusDTO[];

  amount:number=0;

  constructor(private showbillshop: ShopService ,private router:Router) {
  }

  ngOnInit() {
    this.showbillshop.getAllBillshop().subscribe((data) => {
      this.bills = data
      console.log(this.bills)
      this.showbillshop.getallBillStatus().subscribe((data) => {
        this.billstatus = data
        this.billstatusDTO=data;
        for (let i = 0; i < this.billstatusDTO.length; i++) {
          this.amount+=this.billstatusDTO[i].amount;
        }
      })
      this.showbillshop.tinhsaosp().subscribe((data) => {
      })
    })
  }

  showbillbystatus(id:number):void{
    this.showbillshop.showbillbystatus(id).subscribe((data) => {
      this.bills=data;
      this.showbillshop.getallBillStatus().subscribe((data) => {
        this.billstatusDTO=data;
      })
    })

  }
  showbillshop1():void{
    this.showbillshop.getAllBillshop().subscribe((data) => {
      this.bills = data
      this.showbillshop.getallBillStatus().subscribe((data) => {
        this.billstatusDTO=data;
      })
    })
  }
  setbillshop(idstatus:number,idbill:number):void {
    this.showbillshop.setbill(idbill, idstatus).subscribe((data) => {
      this.showbillshop.showbillbystatus(idstatus).subscribe((data) => {
        this.bills=data;
        this.showbillshop.getallBillStatus().subscribe((data) => {
          this.billstatusDTO=data;
        })
      })
    })
  }

  showbillbyidbill(id:number):void{
    this.showbillshop.showbillbyidbill(id).subscribe((data) => {
      this.product = data
      this.showbillshop.getallBillStatus().subscribe((data) => {
        this.billstatusDTO=data;
      })
    })
  }

}
