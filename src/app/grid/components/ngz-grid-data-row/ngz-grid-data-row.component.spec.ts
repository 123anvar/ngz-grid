import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridDataRowComponent } from './ngz-grid-data-row.component';

describe('NgzGridDataRowComponent', () => {
  let component: NgzGridDataRowComponent;
  let fixture: ComponentFixture<NgzGridDataRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridDataRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridDataRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
