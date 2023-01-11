import {Category} from "./Category";
import {Shop} from "./Shop";

export class Product {
  id!: number
  name!: string
  img!: string
  detail! :string
  price!: number
  amount!: number
  category!: Category;

  shop!: Shop;
}
