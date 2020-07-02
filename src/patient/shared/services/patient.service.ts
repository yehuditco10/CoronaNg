import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Patient } from '../../shared/models/patient'
import { from, Observable } from 'rxjs';
import { location } from '../../shared/models/location';
// import { environment } from 'src/environments/environment';
import {environment} from '../../../environments/environment'
import { HttpBaseService } from './http-base.service';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  fireRequest(location: location, arg1: string) {
    throw new Error("Method not implemented.");
  }


  constructor(private http: HttpClient,httpBase:HttpBaseService) { }

  patientLocations: location[];
 
  login(patient: Patient): Observable<Array<location>> {
    return this.http.post<Array<location>>(`${environment.baseRoute}patient/Authenticate`, patient);
  }
  getAll(): Observable<location[]> {
    return this.http.get<location[]>(`${environment.baseRoute}location/page`)
  }
  // getAll(): Observable<location[]> {
  //   return this.httpBase.)
  // }
  saveChanges(patient:Patient): Observable<any>{
    debugger;
    return this.http.post(`${environment.baseRoute}patient`,patient);
  }
}
