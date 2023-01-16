import {Shop} from "./Shop";
import {VoucherType} from "./VoucherType";

export class Voucher {
  id!:number;
  name!: string;

  amount!:number;

  shop!:Shop;

 vouchertype!:VoucherType;
}
