import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/Product";
import {environment} from "../../../environments/environment";
import {Category} from "../../model/Category";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  searchbycategory(category_id : number): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/searchcategory/${category_id}`);
  }

  getallcategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${API_URL}/search/getallcategory`);
  }

  getallproduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/getallproduct`);
  }

  searchbyname(name : string): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/${name}`);
  }

  searchcategoryandname(name : string,category_id:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/searchcategoryandname/${category_id}/${name}`);
  }

  getproductbypriceminmax(pricemin:any,pricemax:any): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/searchprice/${pricemin}/${pricemax}`);
  }
  searchbypriceandname(pricemin:any,pricemax:any,nameproduct:any): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/searchpriceandname/${pricemin}/${pricemax}/${nameproduct}`);
  }

  searchpriceandcategory(pricemin:any,pricemax:any,category_id:any): Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/searchpriceandcategory/${pricemin}/${pricemax}/${category_id}`);
  }

  searchpriceandcategoryandname(pricemin:any,pricemax:any,idcategory:any,nameproduct:any):Observable<Product[]>{
    return this.http.get<Product[]>(`${API_URL}/search/searchpriceandcategoryandname/${pricemin}/${pricemax}/${idcategory}/${nameproduct}`);
  }


}
