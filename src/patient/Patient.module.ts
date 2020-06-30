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
import { DatePickerRangeComponent } from './date-picker-range/date-picker-range.component';
import { RouterModule } from '@angular/router'
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component' 
@NgModule({
  declarations: [
    PatientComponent,
    DatePickerRangeComponent,
    PaginatorComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'datepicker',component:DatePickerRangeComponent}
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule
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