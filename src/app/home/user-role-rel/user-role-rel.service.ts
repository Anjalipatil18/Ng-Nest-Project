import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { UserRoleRelation } from '../interface/user-role-relation';
import { Observable } from 'rxjs'

@Injectable()
export class UserRoleRelationService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRelations(): Observable<UserRoleRelation[]>{
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    return this.http.get<UserRoleRelation[]>(`${this.BASE_URL}/api/relations`,{headers});
  }

  getRelation(id: string): Observable<UserRoleRelation>{
        return this.http.get<UserRoleRelation>(`${this.BASE_URL}/api/relations/${id}`);
   }

  createRelation(Relations: UserRoleRelation): Observable<UserRoleRelation> {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
        return this.http.post<UserRoleRelation>(`${this.BASE_URL}/api/relations`, Relations,{headers});
    }

  deleteRelation(id: string): Observable<UserRoleRelation> {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    return this.http.delete<UserRoleRelation>(`${this.BASE_URL}/api/relations/${id}`,{headers});
  }

  getHeaders(){
    let username='admin'
    let password='123'

    let  basicString='Basic '+window.btoa(username + ':' + password)
    return basicString;
  }
}