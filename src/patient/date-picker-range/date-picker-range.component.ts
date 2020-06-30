import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-date-picker-range',
  templateUrl: './date-picker-range.component.html',
  styleUrls: ['./date-picker-range.component.css']
})
export class DatePickerRangeComponent implements OnInit {

  // range = new FormGroup({
  //   start: new FormControl(),
  //   end: new FormControl()
  // });
  constructor() { }

  ngOnInit(): void {
  }

}
