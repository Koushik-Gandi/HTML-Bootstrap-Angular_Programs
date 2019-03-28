import { Component, Input} from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-custdetails',
  templateUrl: './custdetails.component.html',
  styleUrls: ['./custdetails.component.css']
})
export class CustdetailsComponent {
//using input annotation
constructor(private service:Service1Service) { } 
OnInit(){
  this.getCount1();
}
  @ Input()
  total:number;

  @Input()
  male:number;

  @Input()
  female:number;
  @Input()
  count1:number;
getCount1():number{
return this.count1=this.service.getCount();
}
/*
//event emitter(used to create custom event) usage for output decorator................
selectedEmployee:string='total';
@Output()
OnSelectionOfRadioButton: EventEmitter<string>=new EventEmitter<string>();
//method............userdefined......importing of eventemitter should be done and also output................................................
OnSelectionRadioButton(){
this.OnSelectionOfRadioButton.emit(this.selectedEmployee);
}*/
}