import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../service/shopserviceM/shop.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {min} from "rxjs";

@Component({
  selector: 'app-myproductshop',
  templateUrl: './myproductshop.component.html',
  styleUrls: ['./myproductshop.component.css']
})
export class MyproductshopComponent implements OnInit{

  products !:Product[];

  category!: Category[];

  min!:number;


  constructor(private showbillshop: ShopService ,private router:Router) {
  }

  ngOnInit(): void {
    this.showbillshop.getAllProductMyShop().subscribe((data) => {
      this.products = data
      console.log(this.products)
      this.showbillshop.getallcategory().subscribe((data) => {
        this.category = data
        console.log(this.category)
      })
    })

    console.log(this.min);
  }

  search(name:string,pricemin:number,pricemax:number){
    console.log(name)
    console.log(pricemin)
    console.log(pricemax)
  }

}
