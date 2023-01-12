import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../../model/Category";
import {environment} from "../../../../environments/environment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(API_URL +  '/category');
  }
  findCategoryById(id : number): Observable<Category>{
    return this.http.get<Category>(`${API_URL}/category/${id}`)
  }

}
