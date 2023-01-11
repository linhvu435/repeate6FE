import {Roles} from "./Roles";

export class Account {
  id!: number

  username!:string;
  email!:string;
  password!:string;
  phoneNumber! :string;
  name!:string;
  address!: string;
  birthday!:Date;

  date!:Date;

  gender!:string;
  img!:string;
  status!:number;

  roles!: Roles;
}
