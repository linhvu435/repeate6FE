import { Component } from '@angular/core';
import {ShopService} from "../service/shopserviceM/shop.service";
import {BillDTO} from "../model/Dtos/BillDTO";
import {CartService} from "../service/cartservice/cart.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carts: any = []
  totalPrice: number = this.productService.getCartTotalPrice()

  constructor(private productService: ShopService, private cartService: CartService, private router: Router) {
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
    console.log(billdtos)
    this.cartService.createBill(billdtos).subscribe(res => {
      if (res != null) {
        Swal.fire(
          ' Sucsess ',
          '<h2 style="color: green; font-size: 32px">Successfully </h2>',
          'success')
        this.router.navigate(["/"]);
        localStorage.removeItem("carts")
      }
    });
  }
}
