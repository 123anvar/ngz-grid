import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-radio-button',
  templateUrl: './ngz-grid-radio-button.component.html',
  styleUrls: ['./ngz-grid-radio-button.component.scss']
})
export class NgzGridRadioButtonComponent implements OnInit {
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
