import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridCellComponent } from './ngz-grid-cell.component';

describe('NgzGridCellComponent', () => {
  let component: NgzGridCellComponent;
  let fixture: ComponentFixture<NgzGridCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
