import {Component, OnInit} from '@angular/core';
import {Bill} from "../model/Bill";
import {ProductInBillDTO} from "../model/DTO/ProductInBillDTO";
import {BillStatus} from "../model/BillStatus";
import {ShopService} from "../service/shopserviceM/shop.service";
import {Router} from "@angular/router";
import {CommentService} from "../service/commentservice/comment.service";

@Component({
  selector: 'app-mybill',
  templateUrl: './mybill.component.html',
  styleUrls: ['./mybill.component.css']
})
export class MybillComponent implements OnInit{
  bills :Bill[]=[];

  product:ProductInBillDTO = {id: 0, name:'', total: 0, products: []};

  billstatus:BillStatus[] = [];

  comment = {productId: 0, star: 0, content: '' }



  constructor(private showbillshop: ShopService ,private router:Router, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.showbillshop.getAllBillshop1().subscribe((data) => {
      this.bills = data
      this.showbillshop.getallBillStatus().subscribe((data) => {
        this.billstatus = data
      })
    })
  }



  showbillbystatus(id:number):void{
    this.showbillshop.showbillbystatus1(id).subscribe((data) => {
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
    this.showbillshop.showbillbyidbill1(id).subscribe((data) => {
      this.product = data
      this.comment.productId = this.product.id;
    })
  }


  Comment(){
    this.commentService.comment(this.comment).subscribe(res => {
    })
  }
}
