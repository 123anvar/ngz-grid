import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-select',
  templateUrl: './ngz-grid-select.component.html',
  styleUrls: ['./ngz-grid-select.component.scss']
})
export class NgzGridSelectComponent implements OnInit {
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
