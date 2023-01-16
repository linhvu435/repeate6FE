
import {Category} from "./Category";
import {Shop} from "./Shop";
import {ImgProduct} from "./ImgProduct";

export class Product {
  id!: number
  name!: string
  img!: string
  detail! :string
  price!: number
  amount!: number
  category!: Category;

  amountsell!: number;

  shop!: Shop;

  listimg!:ImgProduct[];
}
