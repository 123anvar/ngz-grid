import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-cell',
  templateUrl: './ngz-grid-cell.component.html',
  styleUrls: ['./ngz-grid-cell.component.scss']
})
export class NgzGridCellComponent implements OnInit {
  gridColumn: any;
  @Input() gridRowControl: FormGroup;
  @Input() rowData: any;
  @Input() gridFormControl: FormControl;
  @Input('column')
  set column(gColumn: any) {
    this.gridColumn = gColumn;
  }

  constructor() { }

  ngOnInit() {
  }

}
