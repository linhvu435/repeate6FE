import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ShopService} from "../../service/shopserviceM/shop.service";
import {Router} from "@angular/router";
import {Shop} from "../../model/Shop";

@Component({
  selector: 'app-myshop',
  templateUrl: './myshop.component.html',
  styleUrls: ['./myshop.component.css']
})
export class MyshopComponent implements OnInit{


  shop !:Shop;

  nameshop!:string;
  constructor(private showbillshop: ShopService ,private router:Router) {
  }

  ngOnInit(): void {
    this.showbillshop.ShowMyShop().subscribe((data) => {
      this.shop=data;
    })
    this.showbillshop.tinhsaosp().subscribe((data) => {
    })
  }




  editshop(){
    this.showbillshop.editshop(this.nameshop).subscribe((data) => {
      this.shop=data;
    })
  }
}
