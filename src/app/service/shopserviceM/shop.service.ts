import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Shop} from "../../model/Shop";
import {Bill} from "../../model/Bill";
import {BillStatus} from "../../model/BillStatus";
import {ProductInBillDTO} from "../../model/DTO/ProductInBillDTO";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }
  getAllBillshop(): Observable<Bill[]>{
    return this.http.get<Bill[]>(`${API_URL}/order/showBillShop`);
  }

  getAllProductMyShop(): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/showproduct/showmyshopproduct`);
  }

  getallcategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${API_URL}/showproduct/getcategoryshopproduct`);
  }
  ShowMyShop(): Observable<Shop>{
    return this.http.get<Shop>(`${API_URL}/showproduct/showmyshop`);
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
  showbillbyidbill(id:number):Observable<ProductInBillDTO>{
    return this.http.get<ProductInBillDTO>(`${API_URL}/order/showBillShopbyidbill/${id}`);
  }

  searchbycategory(category_id:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/searchcategory/${category_id}`);
  }

  searchbypriceminmax(pricemin:number,pricemax:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/${pricemin}/${pricemax}`);
  }

  searchbyname(name:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/${name}`);
  }

  searchbynamminmaxe(name:string,pricemin:number,pricemax:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/order/${pricemin}/${pricemax}/${name}`);
  }








  getProductByIdShop(id : number): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products/${id}`,);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL +  '/products');
  }

  saveProduct(product: Product): Observable<Product> {
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
