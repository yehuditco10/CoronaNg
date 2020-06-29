import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Patient } from '../../shared/models/patient'
import { from, Observable } from 'rxjs';
import { location } from '../../shared/models/location';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  locations: location[];
  //=[{
  //   startDate: '2020.05.05 12:00:22',
  //   endDate: '2020.06.05 12:00:22',
  //   city: 'Bney Brak',
  //   location: 'school',
  //   patientId: '111'
  // }, {
  //   startDate: '2020.05.05 12:00:22',
  //   endDate: '2020.06.05 12:00:22',
  //   city: 'Jerusalem',
  //   location: 'library',
  //   patientId: '111'
  // }, {
  //   startDate: '2020.05.05 12:00:22',
  //   endDate: '2020.06.05 12:00:22',
  //   city: 'Elad',
  //   location: 'park',
  //   patientId: '111'
  // },
  // {
  //   startDate: '2020.05.05 12:00:22',
  //   endDate: '2020.06.05 12:00:22',
  //   city: 'Jerusalem',
  //   location: 'school',
  //   patientId: '222'
  // },
  // {
  //   startDate: '2020.05.05 12:00:22',
  //   endDate: '2020.06.05 12:00:22',
  //   city: 'Tel Aviv',
  //   location: 'school',
  //   patientId: '333'
  // }
  // ];
  login(patient: Patient): Observable<Array<location>> {
    return this.http.post<Array<location>>(`${environment.baseRoute}patient/Authenticate`, patient);
  }
  getAll(): Observable<location[]> {
    return this.http.get<location[]>(`${environment.baseRoute}location`)
  }
}
