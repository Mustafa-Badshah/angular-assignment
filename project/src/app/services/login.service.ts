import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private _http: HttpClient, private _router: Router ) { }

  postLogin(obj:any){
    return this._http.post<any>("http://localhost:5253/api/login", obj)
  }

  isLoggedin(){
    if(localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }

  getToken(){
    let newToken =atob(localStorage.getItem("token"));
    return newToken;
  }

  Logout(){
    localStorage.removeItem("token")
    this._router.navigate(["/login"]);
  }
}
