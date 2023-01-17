import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  comment(cmt: any): Observable<any>{
    return this.http.post<any>(API_URL+ '/comment',cmt);
  }
  findComment(id : number): Observable<Comment[]>{
    return  this.http.get<Comment[]>(`${API_URL}/comment/${id}` )
  }
}
