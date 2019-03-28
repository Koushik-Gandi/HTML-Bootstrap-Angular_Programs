import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practise1',
  templateUrl: './practise1.component.html',
  styleUrls: ['./practise1.component.css']
})
export class Practise1Component implements OnInit {

  value:number;
  constructor(private router:Router) { }
  
  ngOnInit() {
  }
  // add(){
  //   return this.value=5+7;
  // }
  // imgpath='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

    getLink(){
      this.router.navigate(['/practise3']);
    }
}
