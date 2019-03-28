import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practise1Component } from './practise1/practise1.component';
import { Practise2Component } from './practise2/practise2.component';
import { Routes, RouterModule } from '@angular/router';
import { Practise3Component } from './practise3/practise3.component';
import { Practise4Component } from './practise4/practise4.component';
import { Practise5Component } from './practise5/practise5.component';
import { AddService } from './add.service';
import { ErrorComponent } from './error/error.component';
const routes:Routes=[
  {path:"", component:Practise1Component,children:[
    {path:"practise4", component:Practise4Component,children:[
      {path:"practise5", component:Practise5Component}
    ]},  
  ]},
  {path:"practise2/:id", component:Practise2Component},
  {path:"practise3", component:Practise3Component},
  {path:'**',component :ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Practise1Component,
    Practise2Component,
    Practise3Component,
    Practise4Component,
    Practise5Component,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AddService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
