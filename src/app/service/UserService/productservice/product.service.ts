import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../model/Product";
import {environment} from "../../../../environments/environment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  getProductByIdShop(id : number): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products/${id}`,);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL +  '/products');
  }

    saveProduct(product: { imgs: any; amount: any; price: any; name: any; detail: any; shopId: any; categoryId: any }): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products', product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/edit/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }

  findProductId(): Observable<number>{
    return this.http.get<number>(API_URL +  '/products/findIdProduct')
  }

  findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/findProductById/${id}`);
  }

  findNewProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL +  '/showproduct/getnewproduct')
  }
  findTopProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL +  '/showproduct/gettopsellproduct')
  }

  GetCarts(){
    // @ts-ignore
    let CartJson = JSON.parse(localStorage.getItem("carts"));
    return CartJson
  }
  saveCart(carts :any){
    let cartJson = JSON.stringify(carts)
    localStorage.setItem("carts",cartJson)
  }

  getCartTotalPrice(){
    let carts : any = this.GetCarts();
    let total : number = 0;

    carts.forEach((item: any)=>{
      total += item.amount*item.price
    })
    return total;
  }

}
