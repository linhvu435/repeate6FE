import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {SocialUser} from "@abacritt/angularx-social-login";
import {Account} from "../../model/Account";
import {Product} from "../../model/Product";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(user: any): Observable<any>{
    return this.http.post<any>(API_URL+ '/login/login',user);
  }

  register(social:SocialUser ): Observable<any>{
    return this.http.post<any>(API_URL+ '/login/register1',social);
  }

  findUserById(id : number): Observable<Account>{
    return this.http.get<Account>(`${API_URL}/login/users/${id}`)
  }

  setId(id: any){
    localStorage.setItem("id",id)
  }
  getId(){
    return localStorage.getItem("id");
  }
  setToken(token: any){
    localStorage.setItem("token",token);
  }
  getToken(){
    return localStorage.getItem("token");
  }
  setUsername(username: any){
    localStorage.setItem("username",username);
  }
  getUsername(){
    return localStorage.getItem("username");
  }
  setEmail(email: any){
    localStorage.setItem("email",email);
  }
  getEmail(){
    return localStorage.getItem("email");
  }
  setImg(img : any){
    localStorage.setItem("img",img)
  }
  getImg(){
    return localStorage.getItem("img")
  }
  setRole(roles:any){
    localStorage.setItem("roles",roles)
  }
  getRole(){
    return localStorage.getItem("roles")
  }
  setPhoneNumber(phoneNumber : string){
    localStorage.setItem("phoneNumber",phoneNumber)
  }
  getPhoneNumer(){
    return localStorage.getItem("phoneNumber")
  }
  setAddress(address: string){
    localStorage.setItem("address", address)
  }
  getAddress(){
    return localStorage.getItem("address");
  }
  setGenger(gender : string){
    localStorage.setItem("gender",gender)
  }
  getGender(){
    return localStorage.getItem("gender")
  }
  setDate(date : any){
    localStorage.setItem("date", date)
  }
  getDate(){
    return localStorage.getItem("date")
  }
  setBirthday(birthday : any){
    localStorage.setItem("birthday",birthday)
  }
  getBirthday(){
    return localStorage.getItem("birthday")
  }

  //guard
  isLogin = false
}
