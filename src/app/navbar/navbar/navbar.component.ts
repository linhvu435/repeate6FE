import { Component } from '@angular/core';
import {Router} from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  token = localStorage.getItem("token")
  constructor(private router: Router) {
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
