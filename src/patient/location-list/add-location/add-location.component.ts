import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{location}from'../../shared/models/location';
import { PatientService } from '../../shared/services/patient.service';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  newLocation: location = new location();
  validDated:boolean=true;
  @Output()notifyNewLocation:EventEmitter<location>=new EventEmitter<location>();
  
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
  }
  addLocation() {
    this.patientService.locations.push(this.newLocation);
    this.newLocation = new location();
  }
  addNewLocation(){
    debugger;
    if(this.newLocation.startDate>this.newLocation.endDate){
     this.validDated=false;
    }
    else{
       this.notifyNewLocation.emit(this.newLocation);
    }
    console.log(typeof(this.newLocation.startDate));
  }
}
