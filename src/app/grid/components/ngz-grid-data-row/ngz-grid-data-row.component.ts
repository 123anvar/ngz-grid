import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ngz-grid-data-row',
  templateUrl: './ngz-grid-data-row.component.html',
  styleUrls: ['./ngz-grid-data-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgzGridDataRowComponent implements OnInit, AfterViewInit {
  gridColumns = [];
  @Input() rowControl: FormGroup;
  @Input() rowData: any;
  @Input() rowIndex: number;
  @Input('columns')
  set columns(gColumns: any[]) {
    this.gridColumns = gColumns;
  } 

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

}
