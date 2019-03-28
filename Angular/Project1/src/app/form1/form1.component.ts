import { Component, OnInit } from '@angular/core';
import { Fields } from 'src/field';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  field: Fields;
  name:string;
  id:number;
  gender:string;
  fieldArr: Array<Fields>;
  constructor() {
    this.field = new Fields();
  }
  ngOnInit() {

  }
  addFieldValue(): any {
    this.field.name=this.name;
    this.field.id=this.id;
    this.field.gender=this.gender;
    this.fieldArr.push(this.field);
    console.log(this.fieldArr);
  }
}
