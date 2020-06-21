import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import { Aluno } from '../_models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
 baseUrl = 'https://localhost:44324/api/aluno';
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
register(model: Aluno){
  return this.http.post(`${this.baseUrl}`, model);
 }
loggedIn(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
 }
}
