import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user:any={
    email:"",
    password: ""
  }
  message:string;
  constructor(private _login: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  // submit(obj){
  //   this._login.postLogin(obj).subscribe(result=>{
  //     console.log("*******", result);
  //   },
  //   err=>{
  //     console.log("-----", err)
  //   })
  // }
  submit(){
    this._login.postLogin(this.user).subscribe(result=>{
      // console.log("----", result)
      let newToken = btoa(result.token)
      localStorage.setItem("token", newToken)
      this._router.navigate(["/dash"])
    },
    err=> {
        this.message  = err.error.msg;
    })
  }

}
