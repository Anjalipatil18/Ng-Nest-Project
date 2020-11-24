import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Role } from '../interface/roles';
import { Observable } from 'rxjs'

@Injectable()
export class RolesService {

//   BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

//   getRoles(): Observable<Role[]>{
//     return this.http.get<Role[]>(`${this.BASE_URL}/roles`);
//   }

//   getRole(id: string): Observable<Role>{
//     return this.http.get<Role>(`${this.BASE_URL}/roles/${id}`);
//   }

//   createRole(Role: Role): Observable<Role> {
//     return this.http.post<Role>(`${this.BASE_URL}/roles/create`, Role);
//   }

//   deleteRole(id: string): Observable<Role> {
//     console.log(id);
//     return this.http.delete<Role>(`${this.BASE_URL}/roles/delete?id=${id}`);
//   }

//   updateRole(id: string, Role: Role): Observable<Role> {
//     return this.http.put<Role>(`${this.BASE_URL}/Role/update?id=${id}`, Role);
//   }

}