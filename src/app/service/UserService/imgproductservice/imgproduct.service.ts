import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../model/Product";
import {Observable} from "rxjs";
import {ImgProduct} from "../../../model/ImgProduct";
import {environment} from "../../../../environments/environment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ImgproductService {
  constructor(private http:HttpClient) { }
  saveProductImg(imgProduct: ImgProduct): Observable<ImgProduct> {
    return this.http.post<ImgProduct>(API_URL + '/imgProduct', imgProduct);
  }
}
