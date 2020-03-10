import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private _http: HttpClient, private _login: LoginService) { }

  getuser(){
    return this._http.get<any>("http://localhost:5253/api/login/getuser",{
      headers : { Authorization: this._login.getToken()
      }
    })
  }
}
