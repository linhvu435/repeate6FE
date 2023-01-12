import {Component, OnInit} from '@angular/core';
import {AdminProductService} from "../../../service/adminProduct/admin-product.service";
import {Product} from "../../../model/Product";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-show-detail-product',
  templateUrl: './show-detail-product.component.html',
  styleUrls: ['./show-detail-product.component.css']
})
export class ShowDetailProductComponent implements OnInit{

  constructor(private productService: AdminProductService,
              private route: ActivatedRoute) {
  }
  product !: Product;
  id: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
        this.id = paramMap.get('id');
        this.productService.findById(this.id).subscribe((data) => {
          console.log(data)
          this.product = data;
        });
      }
    )
  }

}
