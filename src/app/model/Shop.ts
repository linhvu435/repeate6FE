import {ShopAddress} from "./ShopAddress";
import {Account} from "./Account";

export class Shop {
  id!: number
  img!: string
  name! :string
  shopAddress!:ShopAddress;
  account!: Account;

}
