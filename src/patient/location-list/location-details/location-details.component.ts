import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { location } from '../../shared/models/location';
import { PatientService } from '../../shared/services/patient.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  currentId: number;
  location: location;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private patientService:PatientService) { }

  ngOnInit(): void {
    this.currentId = +this.route.snapshot.paramMap.get('id');
    //ToDo- get details from server
    this.location=this.patientService.patientLocations.find(l=>l.id==this.currentId);
    console.log(this.location);
  }
  onBack() {
    this.router.navigate(['/locations']);
  }
}
