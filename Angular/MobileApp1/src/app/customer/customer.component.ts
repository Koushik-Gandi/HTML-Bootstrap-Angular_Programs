import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //table name=details......and details///
  details=[
    {'employeename':'vivek','gender':'male','department':'CSE','joindate':'06/15/2019'},
    {'employeename':'sai','gender':'male','department':'ECE','joindate':'06/15/2019'},
    {'employeename':'shiva','gender':'male','department':'EEE','joindate':'05/29/2019'},
    {'employeename':'xyz','gender':'female','department':'MECH','joindate':'05/28/2019'}

  ]

  //creating methods 

getTotal():number{
  return this.details.length;
}
count:number;
getLength():number{
  this.count= this.details.length;
  console.log(this.count);
  return
}
getTotalMale():number{
  return this.details.filter(e=>e.gender==="male").length;
}

getTotalFemale():number{
  return this.details.filter(e=>e.gender==="female").length;
}
/*

//..........................OUTPUT.......................................................................

//creating a variable
selectedEmployee:string="total";

//assiging the event emitter variable from child to the temp var created above
getSelection(OnSelectionOfRadioButton:string):void
{
  this.selectedEmployee=OnSelectionOfRadioButton;
}
*/



}

