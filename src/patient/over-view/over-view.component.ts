import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../shared/services/pagination.service';
import { PageEvent } from '@angular/material/paginator';
import { location } from '../shared/models/location';
import { PatientService } from '../shared/services/patient.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.css']
})
export class OverViewComponent implements OnInit {

  dataSource: location[];
  totalCount: number;
  constructor(
      private locationService: PatientService,
      private paginationService: PaginationService) { }
  ngOnInit(): void {
      this.getAlllocations();
  }
  switchPage(event: PageEvent) {
      this.paginationService.change(event);
      this.getAlllocations();
  }
  // delete(location: location) {
  //     this.locationDataService.fireRequest(location, 'DELETE')
  //         .subscribe(() => {
  //             this.dataSource = this.dataSource.filter(x => x.id !== location.id);
  //         });
  // }
  getAlllocations() {
      this.locationService.getAll()
          .subscribe((result: any) => {
              this.totalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
              this.dataSource = result.body.value;
          });
   }
}