import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { } 
  
  login(UserName:string,Password:string):Observable<Patient>
  {
    const patient=new Patient();
    patient.name=UserName;
    patient.password=Password;
      const res=this.http.post<Patient>("api/patient/Authenticate",patient);
      return res;
  }
  register(UserName:string,Password:string):Observable<string>
  {
    const patient=new Patient();
    patient.name=UserName;
    patient.password=Password;
      const res=this.http.post<string>("api/patient/register",patient);
      return res;
  }
}
