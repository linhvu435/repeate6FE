import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/LoginService/login.service";

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit{
constructor(private loginService:LoginService) {
}

  img!: any
  userName!: any
  phoneNumber!:any
  address!: any
  birthday!: any
  gender!: any
  email!: any
  imgShop!: any
  shopAddress!: any
  shopName!: any
  ngOnInit(): void {
    this.userName =localStorage.getItem("username")
    this.email =localStorage.getItem("email")
    this.img =localStorage.getItem("img")
    this.phoneNumber =localStorage.getItem("phoneNumber")
    this.address =localStorage.getItem("address")
    this.birthday =localStorage.getItem("birthday")
    this.gender =localStorage.getItem("gender")
    this.imgShop = localStorage.getItem("imgShop")
    this.shopAddress = localStorage.getItem("addressShop")
    this.shopName = localStorage.getItem("nameShop")
  }

}
