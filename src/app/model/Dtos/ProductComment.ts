import {Category} from "../Category";
import {Shop} from "../Shop";
import {ImgProduct} from "../ImgProduct";

export class ProductComment {
  id!: number
  name!: string
  img!: string
  detail! :string
  price!: number
  amount!: number
  category!: Category;
  shop!: Shop;
  listimg!:ImgProduct[];

  comment!: string
  star!: number
}
