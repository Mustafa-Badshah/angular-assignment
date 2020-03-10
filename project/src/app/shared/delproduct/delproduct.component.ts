import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delproduct',
  templateUrl: './delproduct.component.html',
  styleUrls: ['./delproduct.component.scss']
})
export class DelproductComponent implements OnInit {


  @Input() product:any;
  @Output() delEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.delEvent.emit();
  }

}
