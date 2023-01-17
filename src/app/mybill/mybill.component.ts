import {Component, OnInit} from '@angular/core';
import {Bill} from "../model/Bill";
import {ProductInBillDTO} from "../model/DTO/ProductInBillDTO";
import {BillStatus} from "../model/BillStatus";
import {ShopService} from "../service/shopserviceM/shop.service";
import {Router} from "@angular/router";
import {CommentService} from "../service/commentservice/comment.service";
import {ProductBillComment} from "../model/ProductBillComment";
import {ProductComment} from "../model/Dtos/ProductComment";
import Swal from "sweetalert2";

@Component({
  selector: 'app-mybill',
  templateUrl: './mybill.component.html',
  styleUrls: ['./mybill.component.css']
})
export class MybillComponent implements OnInit{
  stars  = [1,2,3,4,5]

  bills :Bill[]=[];

  product:ProductInBillDTO = {id: 0, name:'', total: 0, products:[]};

  billstatus:BillStatus[] = [];

  comment = [{productId: 0, star: 0, content: '' }];
  productBillComment: ProductBillComment= new ProductBillComment()

  listindex:number[]=[];


  idbill:number=0;

  constructor(private showbillshop: ShopService ,private router:Router, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.showbillshop.getAllBillshop1().subscribe((data) => {
      console.log(data)
      this.bills = data
      this.showbillshop.getallBillStatus().subscribe((data) => {
        this.billstatus = data
      })
      this.showbillshop.tinhsaosp().subscribe((data) => {
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
    this.idbill=id;
    this.showbillshop.showbillbyidbill1(id).subscribe((data) => {
      this.product = data
      console.log(data)
      this.productBillComment.name = data.name;
      let temp =[]

      for (let i = 0; i < data.products.length; i++) {
        let productComment = new ProductComment()
        productComment.name = data.products[i].name
        productComment.id =data.products[i].id
        productComment.img=data.products[i].img
        productComment.amount=data.products[i].amount
        productComment.category =data.products[i].category
        productComment.detail = data.products[i].detail
        productComment.price = data.products[i].price
        productComment.listimg = data.products[i].listimg
        productComment.shop= data.products[i].shop
        temp.push(productComment)
        console.log(productComment)
      }

      this.productBillComment.products = temp;
      console.log(this.productBillComment)
      // this.comment.productId = this.product.id;
    })
  }


  Comment(){
    const set2 = new Set(this.listindex)
    console.log(set2)
    let check = false;
    if (set2.size==this.productBillComment.products.length){
      check=true;
    }
    if (check) {
      for (let i = 0; i < set2.size; i++) {
        let productComment = this.productBillComment.products[i];
        let comment = {productId: productComment.id, star: 6 - productComment.star, content: productComment.comment}
        this.commentService.comment(comment).subscribe(res => {
          this.showbillshop.setbill(this.idbill, 5).subscribe((data) => {
            this.showbillshop.showbillbystatus(5).subscribe((data) => {
              this.bills = data;
            })
          })
          Swal.fire(
            ' Thành công',
            '<h2 style="color: green; font-size: 32px">Bạn đã đánh giá thành công! </h2>',
            'success')
        })
        this.listindex=[];
      }
    }else {
      Swal.fire(
        ' Có lỗi xảy ra',
        '<h2 style="color: green; font-size: 32px">Vui lòng đánh giá hết! </h2>',
        'warning')
    }
  }


  star($event: number, i: number) {
    this.productBillComment.products[i].star = $event;
    $event = 6 - $event
    console.log(i)
    console.log(this.productBillComment.products[i].star)
  }

  writeContent($event: any, i: number) {
    this.productBillComment.products[i].comment = $event.target.value
    this.listindex.push(i)
    console.log(i)
    console.log(this.productBillComment.products[i].comment)
  }
}
