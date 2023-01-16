import { Component } from '@angular/core';
import {ShopService} from "../service/shopserviceM/shop.service";
import {BillDTO} from "../model/Dtos/BillDTO";
import {CartService} from "../service/cartservice/cart.service";
import Swal from "sweetalert2";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Product} from "../model/Product";
import {ProductService} from "../service/UserService/productservice/product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements CanActivate{
  carts: any = []
  totalPrice: number = this.productService.getCartTotalPrice()

  idProduct!:number;

  amountincart!:number;

  product!:Product;
  oken:any;


  voucher!:string;

  constructor(private productService: ShopService, private cartService: CartService,private  products:ProductService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token')

    if (token==null){
      this.router.navigate(['/login']);
      return false;
    }else {
      return true;
    }
  }


  ngOnInit(): void {
    // @ts-ignore
    this.carts = JSON.parse(localStorage.getItem("carts"))

  }

  subTotal(cart: any) {
    return cart.price * cart.amount
  }

  updatePrice(idx: number, ev: any) {
    let newAmount = ev.target.value;
    newAmount = newAmount > 0 ? newAmount : 1;
    ev.target.value = newAmount;
    this.carts[idx].amount = ev.target.value
    this.productService.saveCart(this.carts)
    this.totalPrice = this.productService.getCartTotalPrice()
  }

  removeCart(index: number) {
    this.carts.splice(index, 1);
    this.productService.saveCart(this.carts)
    this.totalPrice = this.productService.getCartTotalPrice()
  }

  createBill() {
    var billdtos: BillDTO[] = [];
    this.carts.forEach((x: { id: any; amount: any; }) => {
      return billdtos.push({idproduct: x.id, amount: x.amount});
    });
    console.log(this.voucher);
    this.cartService.createBill(billdtos,this.voucher).subscribe(res => {
      if (res != null) {
        Swal.fire(
          ' Sucsess ',
          '<h2 style="color: green; font-size: 32px">Successfully </h2>',
          'success')
        this.router.navigate(["/"]);
        localStorage.removeItem("carts")
      }
    },(error)=>{
      Swal.fire(
        ' Có lỗi xảy ra ',
        '<h2 style="color: green; font-size: 32px">Có lỗi xảy ra vui lòng kiểm tra số lượng</h2>',
        'warning')
    });
  }
}
