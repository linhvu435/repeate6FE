import {Component, OnInit} from '@angular/core';
import {AdminProductService} from "../../../service/adminProduct/admin-product.service";
import {Product} from "../../../model/Product";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  id: any;
  product: Product = new Product();

  editForm: FormGroup = new FormGroup({
    name: new FormControl(this.product.name),
    price: new FormControl(this.product.price),
    amount: new FormControl(this.product.amount),
    detail: new FormControl(this.product.detail),
  })

  constructor(private productService: AdminProductService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.productService.findById(this.id).subscribe((data) => {
        console.log(data)
        this.product = data;

        this.editForm = new FormGroup({
          name: new FormControl(this.product?.name),
          detail: new FormControl(this.product.detail),
          price: new FormControl(this.product.price),
          amount: new FormControl(this.product.amount),
        })
      })
    })
  }

  edit() {
    this.productService.updateProductAdmin(this.id, this.editForm.value).subscribe();
    this.router.navigate(["/showList"]);
  }
}
