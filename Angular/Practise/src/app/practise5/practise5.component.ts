import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-practise5',
  templateUrl: './practise5.component.html',
  styleUrls: ['./practise5.component.css']
})
export class Practise5Component implements OnInit {


  constructor(private addservice:AddService) { }

  ngOnInit() {
    
  }
getOutput(){
  alert(this.addservice.getAns());
}

}
