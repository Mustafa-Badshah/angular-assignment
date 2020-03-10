import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  user:any={
    name:"",
    email:"",
    contact: null,
    password: null
  }
  constructor(private _user: UserService, private _router: Router) { }

  ngOnInit() {

  }

  submit(obj:any){
    this._user.postUser(obj).subscribe(result=>{
      this.user= result;
      this._router.navigate(["/login"]);
    })
  }

}
