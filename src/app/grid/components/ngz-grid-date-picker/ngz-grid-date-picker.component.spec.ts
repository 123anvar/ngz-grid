import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridDatePickerComponent } from './ngz-grid-date-picker.component';

describe('NgzGridDatePickerComponent', () => {
  let component: NgzGridDatePickerComponent;
  let fixture: ComponentFixture<NgzGridDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
