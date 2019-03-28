import { Injectable } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  
  constructor(private obj:CustomerComponent) { }
  count:number;

  getCount():number{
    this.count=this.obj.getLength();
    console.log(this.count);
    return 
  }
}
