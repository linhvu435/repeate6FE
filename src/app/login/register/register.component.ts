import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/LoginService/login.service";
import {Router} from "@angular/router";
import {Account} from "../../model/Account";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  detailAccount !: Account


  checkDuplicateMail: boolean = true
  checkDuplicateUsername: boolean = true

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }


  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(12)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("")]),
    address:new FormControl("", [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    gender: new FormControl('Nam', [Validators.required]),
  })


  register() {
    this.loginService.register1(this.registerForm.value).subscribe((data) => {

      this.checkDuplicateUsername = data[0];
      this.checkDuplicateMail = data[1];
      if (data[0] && data[1]) {}
      this.message();
      this.router.navigate(["/login"])

    }, (error)=>{
      Swal.fire(
        ' ',
        '<h2 style="color: red; font-size: 32px">Tài khoản của bạn đã bị trùng username hoặc email</h2>',
        'error'
      )
    });
  }

  message() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đăng kí thành công ',
      showConfirmButton: false,
      timer: 1500
    })
  }

  checkConfirmPassword() {

    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      // @ts-ignore
      document.getElementById("abc").style.display = "block";
    } else {
      // @ts-ignore
      document.getElementById("abc").style.display = "none";
    }
  }

  checkUsername() {

  }
  }
