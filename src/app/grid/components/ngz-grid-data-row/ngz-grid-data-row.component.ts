import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-data-row',
  templateUrl: './ngz-grid-data-row.component.html',
  styleUrls: ['./ngz-grid-data-row.component.scss']
})
export class NgzGridDataRowComponent implements OnInit {
  @Input() rowControl: FormGroup;
  @Input() rowData: any;
  @Input() gridColumns: any[];

  constructor() { }

  ngOnInit() {
    console.log('Reached');
  }

}
