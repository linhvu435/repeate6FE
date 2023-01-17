import {Product} from "./Product";
import {ProductComment} from "./Dtos/ProductComment";

export class ProductBillComment {
  id!: number

  name!:string;

  products!:ProductComment[];

  total!:number;

}
