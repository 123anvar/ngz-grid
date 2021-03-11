import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-label',
  templateUrl: './ngz-grid-label.component.html',
  styleUrls: ['./ngz-grid-label.component.scss']
})
export class NgzGridLabelComponent implements OnInit {
  formControl: FormControl;
  colData: any;
  cellValue: any;
  @Input() rowData: any;
  @Input() gridRowControl: FormArray;
  @Input('gridFormControl')
  set gridFormControl(gFormControl: FormControl) {
    this.formControl = gFormControl;
    this.cellValue = gFormControl.value;
  }
  @Input('column')
  set column(gColumn: any) {
    this.colData = gColumn;
  }

  constructor() { }

  ngOnInit() {
  }

}
