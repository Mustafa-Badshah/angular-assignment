import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:any[];
  product:any={
    product_name: "",
    product_price: null,
    product_discount: null,
    product_details: ""
  }
  index:number;
  constructor(private _product: ProductService) { }

  ngOnInit() {
    this._product.getPorduct().subscribe(result=>{
      this.products = result;
    })
  }

  add(obj){
    if(obj._id){
      this._product.putPorduct(obj, obj._id).subscribe(result=>{
        this.products[this.index] = this.product;
      })
    } else {
      this._product.postPorduct(obj).subscribe(result=>{
        this.products.push(result);
      })
    }
  }

  askedit(obj:any){
    this.index = this.products.indexOf(obj);
    this.product = {... obj}
  }

  
  askdelete(obj){
    this.product = obj;
  }

  delete(){
    this._product.deleteProduct(this.product._id).subscribe(result=>{
      let n = this.products.indexOf(this.product);
      this.products.splice(n, 1)
    })
  }
  askadd(){
    this.product = {
      product_name: "",
      product_price: "",
      product_discount: "",
      product_details: ""
    }
  }

}
