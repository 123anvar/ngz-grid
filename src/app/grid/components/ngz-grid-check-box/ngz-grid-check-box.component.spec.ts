import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridCheckBoxComponent } from './ngz-grid-check-box.component';

describe('NgzGridCheckBoxComponent', () => {
  let component: NgzGridCheckBoxComponent;
  let fixture: ComponentFixture<NgzGridCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
