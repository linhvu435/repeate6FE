import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/UserService/productservice/product.service";
import {ShopService} from "../../service/shopserviceM/shop.service";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  id:any;
  product:any;
  idShop!: number

  // @ts-ignore
  carts = JSON.parse(localStorage.getItem("carts"));
  constructor(private route: ActivatedRoute, private productService : ProductService, private shopService:ShopService) {
    if(this.carts == null){
      this.carts = []
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.productService.findProductById(this.id).subscribe((data)=>{
        this.product = data
      })
      this.shopService.FindIdShopByProductId(this.id).subscribe((data)=>{
        console.log(data)
        this.idShop = data
        console.log(this.idShop)
    })
    })
  }


  pushInCart(product: any) {
    let idx = this.carts.findIndex((item : any)=>{
      return item.id == product.id
    })
    if(idx >=0){
      this.carts[idx].amount = this.carts[idx].amount + 1;
    }
    else {
      let cartItem: any= {
        id: product.id,
        name: product.name,
        img: product.img,
        detail: product.detail,
        price: product.price,
        category: product.category,
        amount: 1,
      }
      this.carts.push(cartItem)

    }

    console.log( this.carts)
    // let cartJson = JSON.stringify(this.carts)
    // localStorage.setItem("carts",cartJson)
    this.productService.saveCart(this.carts)
  }
}

