import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { LoginService } from './shared/services/login.service';
import { from } from 'rxjs';
import { PatientService } from './shared/services/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
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

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'locations',component:LocationListComponent}
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    PatientRoutingModule
    //FormGroup, FormControl
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