import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/UserService/productservice/product.service";
import {Product} from "../../model/Product";
import {SearchService} from "../../service/searchservice/search.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges{
 constructor(private http: HttpClient,private productService: ProductService,private  searchservice:SearchService) {
 }

  // @ts-ignore
  category : Category[] = [{}]

  products : Product[] = [new Product()]

  newProducts : Product[] = [new Product()]
  topProduct: Product[] = [new Product()]

  P : number=1;
  S: number = 1;
  G: number = 1;
  totalItemsS: number = 0;
  totalItemsP: number = 0;
  totalItemsG: number = 0;
  async ngOnInit()  {
    await this.productService.getAll().subscribe((data) => {
      this.products = data
      this.totalItemsP = data.length
      this.searchservice.getallcategory().subscribe((data) => {
        this.category = data
      })
    })
    await this.productService.findNewProduct().subscribe((data) => {
      this.newProducts = data
      this.totalItemsS = data.length
    })
    await this.productService.findTopProduct().subscribe((data) => {
      this.topProduct = data
      this.totalItemsG = data.length
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
    })
  }

  PAGE($event: number) {
    this.S = ($event)
  }

  PAGEP($event: number) {
    this.P = ($event)
  }

  PAGES($event: number) {
    this.S = ($event)
  }
  PAGEG($event: number) {
    this.G = ($event)
  }


}
