import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  form1: FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form1 = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      });
  }


  onSubmit() {
    this.submitted = true;
    if (this.form1.invalid) {
    return;
    }
    alert('SUCCESS!! :-)')
    }
  }
