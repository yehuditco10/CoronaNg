import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { LoginService } from './shared/services/login.service';
import { from } from 'rxjs';
import { PatientService } from './shared/services/patient.service';
import { PaginationService } from './shared/services/pagination.service';
import { HttpBaseService } from './shared/services/http-base.service';

import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule, ReactiveFormsModule, Validators //,FormGroup, FormControl
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
//import {FormGroup, FormControl} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { MatPaginatorModule } from '@angular/material/paginator';
import { LocationListComponent } from './location-list/location-list.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { PatientRoutingModule } from './patient-routing.module';
import { AddLocationComponent } from './location-list/add-location/add-location.component';
import { RegisterComponent } from './register/register.component';
import { LocationDetailsComponent } from './location-list/location-details/location-details.component';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './list/list.component';
import { OverViewComponent } from './over-view/over-view.component';
// import {MatTableDataSource} from '@angular/material/table';

@NgModule({
  declarations: [
    PatientComponent,
    LocationListComponent,
    LoginComponent,
    AddLocationComponent,
    RegisterComponent,
    LocationDetailsComponent,
    ListComponent,
    OverViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'locations', component: LocationListComponent },
      { path: 'locations/:id', component: LocationDetailsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    MatCardModule
    // ,MatTableDataSource
    //FormGroup, FormControl
  ],
  providers: [
    LoginService,
    PatientService,
    PaginationService,
    HttpBaseService
  ],
  exports: [
    PatientComponent
  ]
})
export class PatientModule { }