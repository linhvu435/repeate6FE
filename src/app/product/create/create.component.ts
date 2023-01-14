import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/UserService/productservice/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/UserService/categoryservice/category.service";
import {ShopService} from "../../service/ShopService/shop.service";
import {Category} from "../../model/Category";
import {ImgProduct} from "../../model/ImgProduct";
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
  arrayPicture: string[]=[];
  alreadyBoughtProduct: boolean = true;

  async submit(selectedImgArray: any){
    if (selectedImgArray.length > 0) {
      for (let i = 0; i < selectedImgArray.length; i++) {
        const filePath = selectedImgArray[i].name;
        let ref = (await this.uploadFile(filePath, selectedImgArray[i]))
        this.arrayPicture.push(await ref.getDownloadURL());
      }
      return this.arrayPicture;
    } else {
      return []
    }
  }

  async uploadFile(filePath:string,fileToUpload: any) {
    return (await this.storage.upload(filePath, fileToUpload)).ref;
  }

  uploadFileImg() {
    var selectedImgArray = this.avatarDom1?.nativeElement.files;
    this.submit(selectedImgArray);
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
    var selectedImgArray = this.avatarDom1?.nativeElement.files;
    const promise = Promise.resolve(this.submit(selectedImgArray));
    promise.then((success: String[]) => {
      success.forEach(x => console.log(x));
      let formValue = this.createForm.value;
      var request = {
        name: formValue.name,
        detail: formValue.detail,
        price: formValue.price,
        amount: formValue.amount,
        imgs: success,
        categoryId: formValue.category.id,
        shopId: formValue.shop.id
      }

      console.log(request)
      this.productService.saveProduct(request).subscribe(res => {
        console.log(res)
        this.createForm.reset();
        this.createForm.setControl('shop', new FormGroup({
          id: new FormControl(localStorage.getItem("idShop"))
        }))
        this.arrayPicture = [];
        this.router.navigate(["/product/create"]);
      })
    })
  }
}
