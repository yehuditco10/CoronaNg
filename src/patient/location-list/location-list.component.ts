import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { location } from '../shared/models/location';
import { PatientService } from '../shared/services/patient.service'
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { PaginationService } from '../shared/services/pagination.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  dataSource = new MatTableDataSource<location>();
  // @Input('dataSource')
  // set allowDay(value: location[]) {
  //     this.dataSource = new MatTableDataSource<location>(value);
  // }
  @Input() totalCount: number;
  @Output() onDeletelocation = new EventEmitter();
  @Output() onPageSwitch = new EventEmitter();
  constructor(public paginationService: PaginationService,
              public patientService: PatientService,
               private router: Router) { }

  displayedColumns: string[] = ['id', 'startDate', 'endDate', 'city', 'location', 'delete'];
  locations: location[];
  isLoading: boolean = true;
  halfLength: number;
  locationsLength: number;
  pageSizeOptions: [];
  index: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {

    if (this.patientService.patientLocations) {
      debugger;
      this.isLoading = false
      this.locations = this.patientService.patientLocations;
      this.dataSource = new MatTableDataSource<location>(this.locations);
      // this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // this.halfLength = Math.floor(this.locations.length / 2);
      // this.locationsLength = this.locations.length;
    }
    else {
      this.patientService.getAll().subscribe(
        succsses => {
          debugger
          this.isLoading = false,
            console.log(succsses),
            this.locations = succsses,
            this.dataSource = new MatTableDataSource<location>(this.locations)
            //this.dataSource.paginator = this.paginator,
            // this.halfLength = Math.floor(this.locations.length / 2),
            // this.halfLength = Math.floor(this.locations.length / 2),
            // this.locationsLength = this.locations.length
         
        

       
            console.log(this.pageSizeOptions),
            console.log(this.dataSource.paginator.pageIndex);
          console.log(this.dataSource.paginator.pageSize);

          console.log(this.dataSource)


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

  delete(locationTODelete: location) {
    this.index = this.patientService.patientLocations.indexOf(locationTODelete);
    console.log(this.index);
    
    this.patientService.patientLocations.splice(this.index,1);
    this.locations=this.patientService.patientLocations;
    this.dataSource = new MatTableDataSource<location>(this.locations);
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    debugger;
     filterValue = filterValue.trim(); // Remove whitespace    
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches    
     this.dataSource.filter = filterValue;
     
   }
}
