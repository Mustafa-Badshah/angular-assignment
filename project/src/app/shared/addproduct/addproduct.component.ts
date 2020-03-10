import { Component, OnInit } from '@angular/core';
import { Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  @Input() product:any
  @Output() addEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.addEvent.emit(this.product);
  }

}
