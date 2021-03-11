import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-numeric-text-box',
  templateUrl: './ngz-grid-numeric-text-box.component.html',
  styleUrls: ['./ngz-grid-numeric-text-box.component.scss']
})
export class NgzGridNumericTextBoxComponent implements OnInit {
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
