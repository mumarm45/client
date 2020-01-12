import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }



  login(username:string, password: string){
    return this.httpClient.post('url',{username:username,password:password})
  }
}
