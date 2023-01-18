import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ShopService} from "../../service/shopserviceM/shop.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {min} from "rxjs";
import {Voucher} from "../../model/Voucher";
import {VoucherType} from "../../model/VoucherType";
import {Shop} from "../../model/Shop";
import Swal from "sweetalert2";

@Component({
  selector: 'app-myproductshop',
  templateUrl: './myproductshop.component.html',
  styleUrls: ['./myproductshop.component.css']
})
export class MyproductshopComponent implements OnInit{

  stars  = [1,2,3,4,5]


  products !:Product[];

  category!: Category[];

  min!:number;

  voucher!:Voucher[];

  vouchertype!:VoucherType[];

  shop!:Shop;

  starshop!:number;

  amountvoucher:number=0;

  idvouchertype!:number;



  constructor(private showbillshop: ShopService ,private router:Router) {
  }

  ngOnInit(): void {
    this.showbillshop.getAllProductMyShop().subscribe((data) => {
      this.products = data
      this.shop=this.products[0].shop
      this.showbillshop.getstarshop(this.shop.id).subscribe((data) => {
        this.starshop=data;
      })
      this.showbillshop.getallcategory().subscribe((data) => {
        this.category = data
      })
      this.showbillshop.getvoucher().subscribe((data) => {
        this.voucher = data
      })
      this.showbillshop.getvouchertype().subscribe((data) => {
        this.vouchertype = data
      })
      this.showbillshop.tinhsaosp().subscribe((data) => {

      })
    })

  }



  createvoucher(){
    this.showbillshop.create(this.idvouchertype,this.amountvoucher).subscribe((data) => {
      this.voucher.push(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thành công mã voucher của bạn là :' + data.name,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  deletevoucher(id:number){
    this.showbillshop.delete(id).subscribe((data) => {
      this.voucher=data;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Xóa voucher thành công !',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  messagePassSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thêm mới voucher thành công !',
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
