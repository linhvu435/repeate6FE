import {Component, OnInit} from '@angular/core';
import {AdminProductService} from "../../../service/adminProduct/admin-product.service";
import {Product} from "../../../model/Product";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-list-product',
  templateUrl: './show-list-product.component.html',
  styleUrls: ['./show-list-product.component.css']
})
export class ShowListProductComponent implements OnInit{
  page: number= 1;
  constructor(private adminProduct: AdminProductService,private router:Router) {
  }
  product !: Product[];
  product1 !: Product;
  ngOnInit(): void {
    this.adminProduct.showProductAdmin().subscribe((data) => {
      console.log(data)
      this.product = data
    })

  }

showAll(){
    this.adminProduct.showProductAdmin().subscribe((data)=>{
      this.product = data;
    });
}

  deleteAdminProduct(id:number) {
    this.adminProduct.deleteProduct(id).subscribe(() => {
      alert("đã xóa thành công!")
      this.showAll()
    });
  }
// showProduct(id:number){
//     this.router.navigate(['detail/' + id])
// }
  // showdetail(id:number){
  //   this.adminProduct.showDetailProduct(id).subscribe((data)=>{
  //     this.product1 = data;
  //     console.log(this.product1);
  //     this.showProduct(id);
  //   })
  // }

}
