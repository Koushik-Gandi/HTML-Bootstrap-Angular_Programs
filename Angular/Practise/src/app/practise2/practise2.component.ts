import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practise2',
  templateUrl: './practise2.component.html',
  styleUrls: ['./practise2.component.css']
})
export class Practise2Component implements OnInit {

  id:number;
  constructor(private activated:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activated.snapshot.params['id'];
  }

}
