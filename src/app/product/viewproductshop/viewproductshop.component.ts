import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/UserService/productservice/product.service";
import {Product} from "../../model/Product";
import {ShopService} from "../../service/shopserviceM/shop.service";
import {Category} from "../../model/Category";
import {Shop} from "../../model/Shop";
@Component({
  selector: 'app-viewproductshop',
  templateUrl: './viewproductshop.component.html',
  styleUrls: ['./viewproductshop.component.css']
})
export class ViewproductshopComponent {

  stars = [1,2,3,4,5]
  // @ts-ignore
  id:number;
  product!:Product[];
  idShop!: number;

  shop!:Shop;

  category!:Category[];
  constructor(
    private route: ActivatedRoute,
    private productService : ProductService,
    private showbillshop:ShopService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = paramMap.get('id');
      this.showbillshop.getcategoryshopuser(this.id).subscribe((data) => {
        this.category = data
        console.log(this.category)
        this.productService.getProductByIdShop(this.id).subscribe((data) => {
          this.product = data;
          this.shop= this.product[0].shop;
        })
        this.showbillshop.tinhsaosp().subscribe((data) => {
        })
      })

    })

  }
}



