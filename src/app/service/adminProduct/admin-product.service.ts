import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/Product";
import {environment} from "../../../environments/environment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private http: HttpClient) {

  }

  showProductAdmin(): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/adminProduct/show`);
  }

  updateProductAdmin(id:number, product:Product): Observable<Product[]>{
    return this.http.put<Product[]>(`${API_URL}/adminProduct/edit/${id}`, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/adminProduct/edit/${id}`);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/adminProduct/delete/${id}`);
  }

  showDetailProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/adminProduct/detail/${id}`);
  }
}
