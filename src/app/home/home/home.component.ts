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
  products : Product[] = [{}]

  // @ts-ignore
  category : Category[] = [{}]


  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
      this.searchservice.getallcategory().subscribe((data) => {
        this.category = data
      })
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
    })
  }

}
