import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { location } from '../shared/models/location';
import { from } from 'rxjs';
import { PatientService } from '../shared/services/patient.service'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  displayedColumns: string[] = ['startDate', 'endDate', 'city', 'location'];
  locations: location[];
  dataSource: any;
  isLoading: boolean = true;
  halfLength: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
   
    this.patientService.getAll().subscribe(
      succsses => {
        debugger
        this.isLoading = false,
          console.log(succsses),
          this.locations = succsses,
          this.dataSource = new MatTableDataSource<location>(this.locations),
          this.dataSource.paginator = this.paginator,
          this.halfLength = Math.floor(this.locations.length / 2)

      },
      err => console.log(err))
  }
  onNotifyNewLocation(newLocation: location) {
    debugger;
    this.locations.push(newLocation);
    this.dataSource = new MatTableDataSource<location>(this.locations);
    this.dataSource.paginator = this.paginator;

  }
}
