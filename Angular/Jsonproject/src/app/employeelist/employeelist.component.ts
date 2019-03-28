import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  id:number;
  name:string;
  public Employee: any[];
  constructor(private service:EmployeeserviceService) { }

  ngOnInit() {
    this.service.getData().subscribe(data=>this.Employee=data);
  }

}
