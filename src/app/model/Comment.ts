import {Account} from "./Account";
import {Product} from "./Product";

export class Comment {
  id!: number
  cmt!: string
  star!: number
  account! : Account
  product!: Product
}
