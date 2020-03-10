import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:any={
    name: "",
    email: "",
    contacct: ""
  }
  constructor(private _pro: ProfileService) { }

  ngOnInit() {
    this._pro.getuser().subscribe(result=>{
      this.user = result;
    })
  }

}
