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

  products : Product[] = [new Product()]

  newProducts : Product[] = [new Product()]
  topProduct: Product[] = [new Product()]
  async ngOnInit()  {
    await this.productService.getAll().subscribe((data) => {
      this.products = data
    })
    await this.productService.findNewProduct().subscribe((data) => {
      this.newProducts = data
    })
    await this.productService.findTopProduct().subscribe((data) => {
      this.topProduct = data
  console.log(data)
      console.log(typeof data)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data
    })
  }

}
