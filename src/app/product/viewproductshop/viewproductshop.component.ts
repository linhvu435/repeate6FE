import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/UserService/productservice/product.service";
import {Product} from "../../model/Product";
import {ShopService} from "../../service/UserService/shopservice/shop.service";

@Component({
  selector: 'app-viewproductshop',
  templateUrl: './viewproductshop.component.html',
  styleUrls: ['./viewproductshop.component.css']
})
export class ViewproductshopComponent {
  id:any;
  product!:Product[];
  idShop!: number
  constructor(private route: ActivatedRoute, private productService : ProductService, private shopService:ShopService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.productService.getProductByIdShop(this.id).subscribe((data) => {
        this.product = data;
      })
    })

  }
}



