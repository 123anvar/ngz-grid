import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-date-picker',
  templateUrl: './ngz-grid-date-picker.component.html',
  styleUrls: ['./ngz-grid-date-picker.component.scss']
})
export class NgzGridDatePickerComponent implements OnInit {
  formControl: FormControl;
  colData: any;
  @Input() rowData: any;
  @Input() gridRowControl: FormArray;
  @Input('gridFormControl')
  set gridFormControl(gFormControl: FormControl) {
    this.formControl = gFormControl;
  }
  @Input('column')
  set column(gColumn: any) {
    this.colData = gColumn;
  }

  constructor() { }

  ngOnInit() {
  }

}
