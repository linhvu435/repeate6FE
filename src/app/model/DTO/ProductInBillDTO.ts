import {Roles} from "../Roles";
import {Product} from "../Product";

export class ProductInBillDTO {
  id!: number

  name!:string;

  products!:Product[];

  total!:number;

}
