import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { LoginService } from './shared/services/login.service';
import { from } from 'rxjs';
import { PatientService } from './shared/services/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule,Validators //,FormGroup, FormControl
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
<<<<<<< HEAD
//import {FormGroup, FormControl} from '@angular/forms';
import { RouterModule } from '@angular/router'
import {MatPaginatorModule} from '@angular/material/paginator';
import { LocationListComponent } from './location-list/location-list.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import{PatientRoutingModule} from'./patient-routing.module';
import { AddLocationComponent } from './location-list/add-location/add-location.component';

@NgModule({
  declarations: [
    PatientComponent,
    LocationListComponent,
    LoginComponent,
    AddLocationComponent
=======
import { RouterModule } from '@angular/router'
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component' 
@NgModule({
  declarations: [
    PatientComponent,
    LoginComponent,
    RegisterComponent
>>>>>>> a5fd070ef9024cc2bd5d1bd4af2f1665ee872eba

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
<<<<<<< HEAD
    RouterModule.forRoot([
      {path:'locations',component:LocationListComponent}
    ]),
=======
>>>>>>> a5fd070ef9024cc2bd5d1bd4af2f1665ee872eba
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatTableModule,
    PatientRoutingModule
    //FormGroup, FormControl
=======
    MatTableModule,ReactiveFormsModule
  //  FormGroup, FormControl
>>>>>>> a5fd070ef9024cc2bd5d1bd4af2f1665ee872eba
  ],
  providers: [
    LoginService,
    PatientService
  ],
  exports: [
    PatientComponent
  ]
})
export class PatientModule { }