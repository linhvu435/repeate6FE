import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Shop} from "../../model/Shop";
import {Bill} from "../../model/Bill";
import {BillStatus} from "../../model/BillStatus";
import {ProductInBillDTO} from "../../model/DTO/ProductInBillDTO";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }
  getAllBillshop(): Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/showBillShop`);
  }

  getallBillStatus():Observable<BillStatus[]>{
    return this.http.get<BillStatus[]>(`${API_URL}/order/getallbillstatus`);
  }

  setbill(idbill:number,idstatus:number):Observable<Bill>{
    return this.http.get<Bill>(`${API_URL}/order/setbill/${idbill}/${idstatus}`);
  }

  showbillbystatus(id:number):Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/showBillShop/${id}`);
  }
  showbillbyidbill(id:number):Observable<ProductInBillDTO[]>{
    return this.http.get<ProductInBillDTO[]>(`${API_URL}/order/showBillShopbyidbill/${id}`);
  }

}
