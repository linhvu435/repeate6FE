import {Component, ElementRef, ViewChild} from '@angular/core';
import { Roles } from 'src/app/model/Roles';
import {Account} from "../../model/Account";
import {FormControl, FormGroup} from "@angular/forms";
import {AdminService} from "../../service/adminService/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, Observable} from "rxjs";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
  id: any;
  role!: Array<Roles>
  account: Account = new Account();
  downloadURL: Observable<string> | undefined;
  fb: string = "";

  editForm = new FormGroup({
    name: new FormControl(this.account.name),
    username: new FormControl(this.account.username),
    email: new FormControl(this.account.email),
    phoneNumber: new FormControl(this.account.phoneNumber),
    birthday: new FormControl(this.account.birthday),
    date: new FormControl(this.account.date),
    address: new FormControl(this.account.address),
    img: new FormControl(this.account.img),
    status: new FormControl(this.account.status),
    roles: new FormControl(this.account.roles),
  });

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute, private storage: AngularFireStorage) {

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.adminService.findById(this.id).subscribe((data) => {
        this.account = data
        this.editForm = new FormGroup({
          name: new FormControl(this.account.name),
          username: new FormControl(this.account.username),
          email: new FormControl(this.account.email),
          phoneNumber: new FormControl(this.account.phoneNumber),
          birthday: new FormControl(this.account.birthday),
          date: new FormControl(this.account.date),
          address: new FormControl(this.account.address),
          img: new FormControl(this.account.img),
          status: new FormControl(this.account.status),
          roles: new FormControl(this.account.roles),
        })
      })
    })

    this.adminService.showroles().subscribe((data) => {
      console.log(data)
      this.role = data
    })
  }


  edit() {
    this.adminService.updateProduct(this.id, this.editForm.value).subscribe();
    this.messagePassSuccess();
    this.router.navigate(["/admin"]);
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
              this.editForm.value.img = url
              this.adminService.updateProduct(this.id, this.editForm.value).subscribe();
            }
            console.log(this.fb);
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
      title: 'Update succes !',
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
