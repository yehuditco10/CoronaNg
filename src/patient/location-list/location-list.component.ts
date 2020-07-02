import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { location } from '../shared/models/location';
import { from } from 'rxjs';
import { PatientService } from '../shared/services/patient.service'
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  constructor(public patientService: PatientService, private router: Router) { }

  displayedColumns: string[] = ['startDate', 'endDate', 'city', 'location'];
  locations: location[];
  dataSource: any;
  isLoading: boolean = true;
  halfLength: number;
  locationsLength: number;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {

    if (this.patientService.patientLocations) {
      debugger;
      this.isLoading = false
      this.locations = this.patientService.patientLocations;
      this.dataSource = new MatTableDataSource<location>(this.locations);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.halfLength = Math.floor(this.locations.length / 2);
      this.locationsLength = this.locations.length;

    }
    else {
      this.patientService.getAll().subscribe(
        succsses => {
          debugger
          this.isLoading = false,
            console.log(succsses),
            this.locations = succsses,
            this.dataSource = new MatTableDataSource<location>(this.locations),
            this.dataSource.paginator = this.paginator,
            this.halfLength = Math.floor(this.locations.length / 2),
            this.halfLength = Math.floor(this.locations.length / 2),
            this.locationsLength = this.locations.length

        },
        err => console.log(err))
    }


  }
  onNotifyNewLocation(newLocation: location) {
    debugger;
    this.locations.push(newLocation);
    this.dataSource = new MatTableDataSource<location>(this.locations);
    this.dataSource.paginator = this.paginator;

  }
  getDetails(id: number) {
    this.router.navigate(['/locations', id]);
  }
}
