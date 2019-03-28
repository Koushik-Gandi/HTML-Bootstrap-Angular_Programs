import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  url:string='http://localhost:3000/Employee';
  constructor(private http:HttpClient) { }
getData():Observable<Employee[]>{
 return this.http.get<Employee[]>(this.url);
}


}
