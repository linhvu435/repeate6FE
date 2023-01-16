import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/LoginService/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


 function phoneValidator(control: FormControl) {
  const phone = control.value;
  if (!phone) {
    return null;
  }
  if (!/^03\d{8}$/.test(phone)) {
    return { phone: true };
  }
  return null;
}

function jpgValidator(control: FormControl) {
  const file = control.value;
  if (!file) {
    return null;
  }
  const extension = file.name.split('.')[1].toLowerCase();
  if (extension !== 'jpg' && extension !== 'jpeg') {
    return { jpg: true };
  }
  return null;
}

function dateValidator(control: FormControl) {
  const date = control.value;
  if (!date) {
    return null;
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { date: true };
  }
  return null;
}
@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit{
constructor(private loginService:LoginService) {}
  idAccount!: any
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
  name!:any;
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
    this.idAccount = localStorage.getItem("id")
    this.name = localStorage.getItem("name")
  }




updateInfo = new FormGroup({
  // userName : new FormControl(localStorage.getItem("username")),
  email : new FormControl("",Validators.required),
  // img : new FormControl(localStorage.getItem("img")),
  phoneNumber: new FormControl("", [Validators.required, phoneValidator]),
  address : new FormControl("",Validators.required),
  birthday : new FormControl("",[Validators.required,dateValidator]),
  gender : new FormControl("",Validators.required),
  // imgShop : new FormControl(localStorage.getItem("imgShop")),
  // shopAddress : new FormControl(localStorage.getItem("addressShop")) ,
  // shopName : new FormControl( localStorage.getItem("nameShop"))
})

findUserById(){
  this.loginService.findUserById(this.idAccount).subscribe((data)=>{
    let name = data.name
    let email = data.email
  })
}

}
