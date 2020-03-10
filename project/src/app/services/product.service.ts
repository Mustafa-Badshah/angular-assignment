import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private _http: HttpClient, private _login: LoginService) { }

  getPorduct(){
    return this._http.get<any>("http://localhost:5253/api/product",{
      headers : { Authorization: this._login.getToken()
      }
    })
  }

  postPorduct(obj:any){
    return this._http.post<any>("http://localhost:5253/api/product",obj, {
      headers : { Authorization: this._login.getToken()
      }
    })
  }

  putPorduct(obj:any, id:string){
    return this._http.put<any>("http://localhost:5253/api/product/"+id, obj, {
      headers : { Authorization: this._login.getToken()
      }
    })
  }

  deleteProduct(id: string){
    return this._http.delete<any>("http://localhost:5253/api/product/"+id,{
      headers : { Authorization: this._login.getToken()
      }
    })
  }
}
