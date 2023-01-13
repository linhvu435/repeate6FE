import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {LoginService} from "../service/LoginService/login.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  token =this.loginservice.getToken();
  constructor(private router: Router,private loginservice:LoginService) {
  }
  ngOnInit(): void {
    if (this.token!=""){
// @ts-ignore

      document.getElementById("checkout").hidden = false;


    }else {
      // @ts-ignore
      document.getElementById("register").hidden=false;
      // @ts-ignore
      document.getElementById("login").hidden=false;
    }
  }
logout(){
  localStorage.clear();
  Swal.fire(
    ' ',
    '<h2 style="color: green; font-size: 32px">Successfully </h2>',
    'success')
  this.token = localStorage.getItem("token")
  this.router.navigate(["/home"]);
}
}
