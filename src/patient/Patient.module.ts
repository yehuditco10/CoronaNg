import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent }from './patient.component';
import { LoginService } from './shared/services/login.service';
import { from } from 'rxjs';
import { PatientService } from './shared/services/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PatientComponent
     
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
    ,HttpClientModule
  ],
  providers:[
    LoginService,
    PatientService
  ],
  exports:[ 
      PatientComponent
    ]
})
export class PatientModule { }