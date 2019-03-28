import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilecomponentnameComponent } from './mobilecomponentname/mobilecomponentname.component';
import { CustomerComponent } from './customer/customer.component';
import { ColorDirective } from './customer/color.directive';
import { Salutation } from './custdetails/salutation.pipes';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { Service1Service } from './service1.service';

@NgModule({
  declarations: [
    AppComponent,
    Salutation,
    MobilecomponentnameComponent,
    CustomerComponent,
    ColorDirective,
    CustdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
