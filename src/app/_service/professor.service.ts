import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import { Professor } from '../_models/Professor';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
 baseUrl = 'https://localhost:44324/api/Professor';
 jwtHelper = new JwtHelperService();
 decodeToken: any ;
constructor(private http: HttpClient) { }
login(model: any) {
  return this.http
  .post(`${this.baseUrl}Login`, model).pipe(
    map((response: any) => {
      const user = response;
      if (user){
        localStorage.setItem('token', user.token);
        this.decodeToken = this.jwtHelper.decodeToken(user.token);
      }
    })
  );
 }
createProfessor(model: Professor){
  return this.http.post(`${this.baseUrl}`, model);
 }
listaProfessor()
{
  return this.http.get<Professor[]>(`${this.baseUrl}`);
}

loggedIn(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
 }
}
