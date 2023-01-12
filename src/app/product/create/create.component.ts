import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/UserService/productservice/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/UserService/categoryservice/category.service";
import {ShopService} from "../../service/ShopService/shop.service";
import {Category} from "../../model/Category";
import {ImgProduct} from "../../model/ImgProduct";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ImgproductService} from "../../service/UserService/imgproductservice/imgproduct.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  constructor(private productService:ProductService, private router: Router,
              private categoryService: CategoryService, private shopService: ShopService,private storage: AngularFireStorage,
              protected imgProductService: ImgproductService) {
  }
  createForm: any;
  categorys! : Array<Category>
  id! : number
  idProduct!: number
  imgProduct!: ImgProduct
  id_shop = localStorage.getItem("idShop")

  @ViewChild('uploadFile', {static: true}) public avatarDom1: ElementRef | undefined;
  selectedImage: any = null;
  arrayPicture!: string;
  submit(){
    if(this.selectedImage !=null){
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => { this.arrayPicture =url
        })))
      ).subscribe();
    }
  }
  uploadFileImg(){
    this.selectedImage = this.avatarDom1?.nativeElement.files[0];
    this.submit();
  }
  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data)=>{
        this.categorys = data
      }
    )
    this.createForm = new FormGroup({
      name: new FormControl(""),
      detail: new FormControl(""),
      price: new FormControl(""),
      amount: new FormControl(""),
      category: new FormGroup({id: new FormControl(this.id)}),
      shop:  new FormGroup({id : new FormControl(this.id_shop)})
    })
  }

  create() {
    console.log(this.createForm.value)
    this.productService.saveProduct(this.createForm.value).subscribe()
    this.productService.findProductId().subscribe((data)=>{
       this.idProduct =data;
      })
    // this.imgProduct.product_id = this.idProduct
    // this.imgProduct.name = this.arrayPicture
    this.imgProductService.saveProductImg(this.imgProduct).subscribe((data)=>{
      console.log(data ,"12")
    })
    this.createForm.reset();
    this.createForm.setControl('shop', new FormGroup({
      id: new FormControl(localStorage.getItem("idShop"))
    }))
    this.router.navigate(["/product/create"]);

  }


}
