import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/UserService/productservice/product.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges{
 constructor(private http: HttpClient,private productService: ProductService) {
 }
  // @ts-ignore
  products : Product[] = [{}]


  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
    })
  }

}
