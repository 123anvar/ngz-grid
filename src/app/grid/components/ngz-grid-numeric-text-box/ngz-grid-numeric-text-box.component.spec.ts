import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridNumericTextBoxComponent } from './ngz-grid-numeric-text-box.component';

describe('NgzGridNumericTextBoxComponent', () => {
  let component: NgzGridNumericTextBoxComponent;
  let fixture: ComponentFixture<NgzGridNumericTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridNumericTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridNumericTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
