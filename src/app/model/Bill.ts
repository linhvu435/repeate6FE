import {BillStatus} from "./BillStatus";
import {Account} from "./Account";
import {Product} from "./Product";
import {Voucher} from "./Voucher";

export class Bill {
  id!: number

  date!:Date;
  billStatus!:BillStatus;

  totalprice!:number;
  product! :Product[];
  account!:Account;

  voucher!:Voucher;

}
