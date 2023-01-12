import {Account} from "../Account";
import {Shop} from "../Shop";
import {ImgProduct} from "../ImgProduct";
import {Category} from "../Category";

export class ProductDTO{
  id!: number
  name!:string;
  detail!:string;
  price!:number;
  amount!:number;
  category!:Category;
  shop!:Shop
  imgProducts!: ImgProduct[];
}
