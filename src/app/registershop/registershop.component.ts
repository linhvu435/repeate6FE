import {Component, ElementRef, ViewChild} from '@angular/core';
import {Roles} from "../model/Roles";
import {Account} from "../model/Account";
import {finalize, Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import Swal from "sweetalert2";
import {ShopService} from "../service/shopserviceM/shop.service";

@Component({
  selector: 'app-registershop',
  templateUrl: './registershop.component.html',
  styleUrls: ['./registershop.component.css']
})
export class RegistershopComponent {
  id: any;

  downloadURL: Observable<string> | undefined;

  registerShopForm = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    img: new FormControl(""),
  });

  constructor(private adminService: ShopService, private router: Router, private route: ActivatedRoute, private storage: AngularFireStorage) {

  }


  ngOnInit(): void {
  }


  registershop() {
    this.adminService.registershop(this.registerShopForm.value).subscribe();
    this.messagePassSuccess();
    this.router.navigate(["/myshop"]);
  }

  @ViewChild('uploadFile', {static: true}) public avatarDom1: ElementRef | undefined;

  onFileSelected({event}: { event: any }) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.registerShopForm.value.img = url
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }



  messagePassSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đăng kí bán hàng thành công !',
      showConfirmButton: false,
      timer: 1500
    })
  }

  messagePassFail() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Change password fail ! ',
      showConfirmButton: false,
      timer: 1500
    })

  }
}
