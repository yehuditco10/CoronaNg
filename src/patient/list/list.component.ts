import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from '../shared/services/pagination.service';
import { location } from '../shared/models/location';
import { from } from 'rxjs';
@Component({ 
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

    dataSource = new MatTableDataSource<location>();
    displayedColumns = ['id', 'name', 'created', 'actions'];
    @Input('dataSource')
    set allowDay(value: location[]) {
        this.dataSource = new MatTableDataSource<location>(value);
    }
    @Input() totalCount: number;
    @Output() onDeletelocation = new EventEmitter();
    @Output() onPageSwitch = new EventEmitter();
    constructor(public paginationService: PaginationService) { }
}