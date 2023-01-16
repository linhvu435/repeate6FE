import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shop} from "../../model/Shop";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }
  findById(id: number): Observable<Shop> {
      return this.http.get<Shop>(`${API_URL}/shop/${id}`);

  }
  findShopById(id: number): Observable<Shop> {
    return this.http.get<Shop>(`${API_URL}/shop/shop/${id}`);
  }
  setIdShop(id : any){
    localStorage.setItem("idShop",id);
  }
  getIdShop(){
    return localStorage.getItem("idShop")
  }
  setImgShop(img : any){
    localStorage.setItem("imgShop",img);
  }
  getImgShop(){
    localStorage.getItem("imgShop")
  }
  setAddressShop(address : any){
    localStorage.setItem("addressShop", address)
  }
  getAddressShop(){
    return localStorage.getItem("addressShop")
  }
  setNameShop(nameShop : any){
    localStorage.setItem("nameShop", nameShop)
  }
  setName(name : any){
    localStorage.setItem("name", name)
  }
  getNameS(){
    return localStorage.getItem("name")
  }
  getNameShop(){
    return localStorage.getItem("nameShop")
  }
}
