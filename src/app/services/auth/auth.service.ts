import { LoginPayload } from './../../features/auth/interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/features/auth/interfaces/auth.interface';
// Observable
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
// LoginPayload
  login(payload:LoginPayload):Observable<LoginResponse>{
    // return this._HttpClient.post('/https://dummyjson.com/auth/login');
    return this._HttpClient.post<LoginResponse>('https://dummyjson.com/auth/login',payload);
  }
}
