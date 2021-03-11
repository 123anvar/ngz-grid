import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridRadioButtonComponent } from './ngz-grid-radio-button.component';

describe('NgzGridRadioButtonComponent', () => {
  let component: NgzGridRadioButtonComponent;
  let fixture: ComponentFixture<NgzGridRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
