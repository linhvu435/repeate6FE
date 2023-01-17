import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {ImgProduct} from "../model/ImgProduct";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../service/UserService/productservice/product.service";
import {ShopService} from "../service/shopserviceM/shop.service";
import {SearchService} from "../service/searchservice/search.service";
import {Category} from "../model/Category";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  stars  = [1,2,3,4,5]

  id!:any;

  products!:Product[];
  idShop!: number

  name:any;

  // @ts-ignore
  categorys:Category[] = [{}]

  idShopDangNhap!: any;

  name1!:any;

  dem!: any;

  totalItemsP: number = 0;

  P : number=1;


  //tìm kieesm
  nameproduct:any;
  pricemin:number=0;
  pricemax:number=0;
  idcategory:number=0;
  productcheck!:Product[];
  //end


  constructor(private route: ActivatedRoute,private searchservice:SearchService,private shopService:ShopService) {

  }

  ngOnInit(): void {

     this.route.paramMap.subscribe(paramMap => {
       this.id = paramMap.get('idcategory');

       console.log(this.id)

         this.searchservice.searchbycategory(this.id).subscribe((data) => {
           this.products = data
           this.name1=this.products[0].category.name
           this.totalItemsP=this.products.length
         })

    })
    this.searchservice.getallcategory().subscribe((data)=>{
      this.categorys = data
    })
  }

  ghetallproduct(){
    this.searchservice.getallproduct().subscribe((data) => {
      this.products = data
      this.products.length=this.dem;
      this.totalItemsP=this.products.length
      this.idcategory=0;
    })
    this.name1="Toàn bộ sản phẩm";
  }

  searchbycategory_id(id:number){
    this.searchservice.searchbycategory(id).subscribe((data) => {
      this.products = data
      this.name1=this.products[0].category.name
      this.totalItemsP=this.products.length
      this.idcategory=id;
    })
  }

  delete(){
    // @ts-ignore
    document.getElementById("loigia").hidden=true;
    this.pricemax=0;
    this.pricemin=0;
    this.nameproduct=null;
    this.ghetallproduct();
  }

  search(){
    let check =true;
    if (this.pricemin> this.pricemax&& (this.pricemin != 0 || this.pricemax != 0)){
      // @ts-ignore
      document.getElementById("loigia").hidden=false;
      check =false;
    }else {
      // @ts-ignore
      document.getElementById("loigia").hidden=true;
    }
    if (check){
      if (this.nameproduct != null && (this.pricemin != 0 || this.pricemax != 0)&&this.pricemin<this.pricemax && this.idcategory !=0){
        this.searchservice.searchpriceandcategoryandname(this.pricemin,this.pricemax,this.idcategory,this.nameproduct).subscribe((data) => {
          this.products = data
        })
      }else if(this.nameproduct != null && (this.pricemin != 0 || this.pricemax != 0)&&this.pricemin<this.pricemax&&this.idcategory==0){
        this.searchservice.searchbypriceandname(this.pricemin,this.pricemax,this.nameproduct).subscribe((data) => {
          this.products = data
        })
      }else if ((this.pricemin != 0 || this.pricemax != 0)&&this.pricemin<this.pricemax && this.idcategory !=0&&this.nameproduct==null){
        this.searchservice.searchpriceandcategory(this.pricemin,this.pricemax,this.idcategory).subscribe((data) => {
          this.products = data
        })
      }else if ((this.pricemin != 0 || this.pricemax != 0)&&this.pricemin<this.pricemax && this.idcategory ==0&&this.nameproduct==null){
        this.searchservice.getproductbypriceminmax(this.pricemin,this.pricemax).subscribe((data) => {
          this.products = data
        })
      }else if (this.pricemin == 0 && this.pricemax == 0&& this.idcategory !=0&&this.nameproduct!=null){
        this.searchservice.searchcategoryandname(this.nameproduct,this.idcategory).subscribe((data) => {
          this.products = data
        })
      }
      else if(this.pricemin == 0 && this.pricemax == 0&& this.idcategory ==0&&this.nameproduct!=null){
        this.searchservice.searchbyname(this.nameproduct).subscribe((data) => {
          this.products = data
        })
      }
    }

  }
}
