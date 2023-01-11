import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Shop} from "../../model/Shop";
import {LoginService} from "../../service/LoginService/login.service";
import {Router} from "@angular/router";
import {ShopService} from "../../service/ShopService/shop.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnChanges {
  shop!: Shop
  id!: any


  constructor(private loginService: LoginService, private router: Router, private shopService: ShopService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.login();
    }
  loginForm = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })
  login(){
    this.loginService.login(this.loginForm.value).subscribe((data)=>{
      console.log(data)
      this.loginService.setId(data.id);
      this.loginService.setToken(data.token);
      this.loginService.setUsername(data.username);
      this.loginService.setImg(data.img);
      this.loginService.setEmail(data.email);
      this.loginService.setPhoneNumber(data.phoneNumber);
      this.loginService.setAddress(data.address);
      this.loginService.setGenger(data.gender);
      this.loginService.setDate(data.date);
      this.loginService.setBirthday(data.birthday)
      this.loginService.setRole(JSON.stringify(data.roles[0].id));
      this.id = localStorage.getItem("id")
      this.shopService.findById(this.id).subscribe((data)=>{
        this.shopService.setIdShop(data.id);
        this.shopService.setImgShop(data.img);
        this.shopService.setNameShop(data.name);
        this.shopService.setAddressShop(data.shopAddress.name);
      })
        Swal.fire(
          ' OK!! ',
          '<h2 style="color: green; font-size: 32px">Successfully </h2>',
          'success')
        this.router.navigate(["/home"]);

    })

  }
}
