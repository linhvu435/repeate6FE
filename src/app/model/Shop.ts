import {ShopAddress} from "./ShopAddress";
import {Account} from "./Account";

export class Shop {
  id!: number
  img!: string
  name! :string

  status!:number;
  shopAddress!:ShopAddress;
  account!: Account;

}
