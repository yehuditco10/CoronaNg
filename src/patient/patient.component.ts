import { Component, OnInit } from '@angular/core';
import { PatientService } from './shared/services/patient.service';
import { Patient } from './shared/models/patient';
import { LoginService } from './shared/services/login.service';
import { location } from './shared/models/location';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: Patient = new Patient();
  title = "Report your path!";
  messageLogin: string;
  newLocation: location=new location();

  titles = ['Start Date', 'End Date', 'City', 'Location', ''];
  constructor(public patientService: PatientService) { }

  ngOnInit(): void {
    this.get();
  }
  login() { }
  register() { }
  deleteLocation(locationToDelete: location) {
    const index = this.patientService.locations.indexOf(locationToDelete);
    this.patientService.locations.splice(index, 1);
  }
  addLocation()
  {
    this.patientService.locations.push(this.newLocation);
    this.newLocation=new location();
  }
  get()
  {
    this.patientService.getAll().subscribe(
      succsses=>this.patientService.locations=succsses,
      err=>console.log(err))
  }
}
