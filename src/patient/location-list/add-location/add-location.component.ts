import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { location } from '../../shared/models/location';
import { PatientService } from '../../shared/services/patient.service';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  newLocation: location = new location();
  validDated: boolean = true;
  @Output() notifyNewLocation: EventEmitter<location> = new EventEmitter<location>();

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }
  addLocation() {
    this.patientService.patientLocations.push(this.newLocation);
    this.newLocation = new location();
  }
  addNewLocation() {
    if (this.newLocation.startDate > this.newLocation.endDate) {
      this.validDated = false;
    }
    else {
      this.validDated = true;
      this.notifyNewLocation.emit(this.newLocation);
    }
  }
}
