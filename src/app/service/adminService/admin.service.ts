import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Roles} from "../../model/Roles";
import {Account} from "../../model/Account";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  showroles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(API_URL +  '/admin/showrole');
  }
  showAccountRoles(id:number): Observable<Account[]>{
    return this.http.get<Account[]>(`${API_URL}/admin/showAccount/${id}`);
  }
  findById(id: number): Observable<Account> {
    return this.http.get<Account>(`${API_URL}/admin/account/${id}`);
  }

  updateProduct(id: number, account: ɵTypedOrUntyped<{ birthday: FormControl<Date | null>; date: FormControl<Date | null>; img: FormControl<string | null>; phoneNumber: FormControl<string | null>; address: FormControl<string | null>; roles: FormControl<Roles | null>; name: FormControl<string | null>; email: FormControl<string | null>; username: FormControl<string | null>; status: FormControl<number | null> }, ɵFormGroupValue<{ birthday: FormControl<Date | null>; date: FormControl<Date | null>; img: FormControl<string | null>; phoneNumber: FormControl<string | null>; address: FormControl<string | null>; roles: FormControl<Roles | null>; name: FormControl<string | null>; email: FormControl<string | null>; username: FormControl<string | null>; status: FormControl<number | null> }>, any>): Observable<Account> {
    return this.http.put<Account>(`${API_URL}/admin/${id}`,account);
  }

  searchByname(name:string): Observable<Account[]>{
    return this.http.get<Account[]>(`${API_URL}/admin/seach/${name}`);
  }
  searchByPhone(phone:string): Observable<Account[]>{
    return this.http.get<Account[]>(`${API_URL}/admin/User/seach/${phone}`);
  }

  updateStatus(id: number, idstt : number): Observable<Account>{
    return this.http.get<Account>(`${API_URL}/admin/User/update/${id}/${idstt}`);
  }
}
