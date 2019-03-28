import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-practise4',
  templateUrl: './practise4.component.html',
  styleUrls: ['./practise4.component.css']
})
export class Practise4Component implements OnInit {
num1:number;
num2:number;
  constructor(private addservice:AddService) { }

  ngOnInit() {
   
  }
add(){
  this.addservice.n1=this.num1;
  this.addservice.n2=this.num2;
}
}
