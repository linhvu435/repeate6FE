import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {BillDTO} from "../../model/Dtos/BillDTO";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }


  createBill(billdtos: BillDTO[],voucher:string): Observable<any> {
    return this.http.post<any>(  `${API_URL}/order/createbill/${voucher}` , {productBillDTOS: billdtos})
  }
}
