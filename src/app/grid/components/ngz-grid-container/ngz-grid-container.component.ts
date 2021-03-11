import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-container',
  templateUrl: './ngz-grid-container.component.html',
  styleUrls: ['./ngz-grid-container.component.scss']
})
export class NgzGridContainerComponent implements OnInit {
  gridId: string;
  gridColumns = [];
  gridData = [];
  formGroup: FormGroup;
  formArray: FormArray;
  @Input('id')
  set id(gId: string) {
    this.gridId = gId;
  }
  @Input('columns')
  set columns(gColumns: any[]) {
    if (gColumns && gColumns.length) {
      this.gridColumns = gColumns.sort((a, b) => a['columnOrder'] - b['columnOrder']);
    }
  }
  @Input('dataSource')
  set dataSource(gDataSource: any[]) {
    if (gDataSource && gDataSource.length) {
      this.gridData = gDataSource;
      this.generateGridForm();
    }
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  generateGridForm() {
    this.formArray = this.formBuilder.array([]);
    if (this.gridData && this.gridData.length) {
      for (let i = 0; i < this.gridData.length; i++) {
        const rowData = { ...this.gridData[i] };
        const rowGroup = this.formBuilder.group(rowData);
        rowGroup.patchValue(rowData);
        this.formArray.push(rowGroup);
      }
      this.formGroup = this.formBuilder.group({ gridForm: this.formArray });
    }
  }

}
