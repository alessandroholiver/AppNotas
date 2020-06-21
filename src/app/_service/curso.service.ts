import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import { Curso } from '../_models/Curso';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
 baseUrl = 'https://localhost:44324/api/curso';
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
createCurso(model: Curso){
  return this.http.post(`${this.baseUrl}`, model);
 }
listaCursos()
{
  return this.http.get<Curso[]>(`${this.baseUrl}`);
}

loggedIn(){
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
 }
}
