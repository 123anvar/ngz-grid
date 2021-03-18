import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ngz-grid-cell',
  templateUrl: './ngz-grid-cell.component.html',
  styleUrls: ['./ngz-grid-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgzGridCellComponent implements OnInit, AfterViewInit, OnDestroy {
  gridColumn: any;
  componentRef: any;
  @ViewChild('gridCell', { static: true }) tableCell: ElementRef;
  @ViewChild('dynamicCell', { read: ViewContainerRef, static: false }) dynamicCell: ViewContainerRef;
  @Input() gridRowControls: FormGroup;
  @Input() rowData: any;
  @Input() gridFormControl: FormControl;
  @Input() rowIndex: number;
  @Input('column')
  set column(gColumn: any) {
    this.gridColumn = gColumn;
  }
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.gridColumn['cellTemplate'] === 'dynamic' && this.gridColumn['dynamicComponent']) {
      this.loadDynamicComponent(this.gridColumn['dynamicComponent']);
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  loadDynamicComponent(component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.dynamicCell.clear();
    this.componentRef = this.dynamicCell.createComponent(componentFactory);
    this.assignDynamicInputs();
    if (this.gridColumn['dataInput'] && (this.gridColumn['listen'] === undefined || this.gridColumn['listen'])) {
      this.gridRowControls.valueChanges.pipe(distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(rowValue => {
        this.rowData = rowValue;
        this.assignDynamicInputs();
      });
    }
  }

  assignDynamicInputs() {
    const dataInput = this.gridColumn['dataInput'];
    if (dataInput) {
      for (let i = 0; i < dataInput.length; i++) {
        const inputItem = dataInput[i];
        switch (inputItem.type) {
          case 'hardcoded':
            this.componentRef.instance[inputItem.input] = inputItem.key;
            break;
          case 'metadata':
            this.componentRef.instance[inputItem.input] = this.gridColumn[inputItem.key];
            break;
          case 'control':
            this.componentRef.instance[inputItem.input] = this.gridRowControls.controls[inputItem.key];
            break;
          default:
            this.componentRef.instance[inputItem.input] = this.rowData[inputItem.key];
            break;
        }
      }
    }
    this.componentRef.instance['formControl'] = this.gridFormControl;
    this.componentRef.instance['gridContext'] = this;
    this.componentRef.instance['column'] = this.gridColumn;
    this.componentRef.instance['rowData'] = this.rowData;
    this.componentRef.instance['rowIndex'] = this.rowIndex;
    this.componentRef.instance['gridRowControls'] = this.gridRowControls;
    if (this.gridColumn['style'] && this.gridColumn['style']['componentStyle']) {
      this.componentRef.instance['componentStyle'] = this.gridColumn['style']['componentStyle'];
    }
    if (this.gridColumn['events']) {
      const customComponentEvents = Object.keys(this.gridColumn['events']);
      for (let i = 0; i < customComponentEvents.length; i++) {
        this.componentRef.instance[customComponentEvents[i]] = this.gridColumn['events'][customComponentEvents[i]];
      }
    }
  }

}
