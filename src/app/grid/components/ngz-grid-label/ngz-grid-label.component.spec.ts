import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridLabelComponent } from './ngz-grid-label.component';

describe('NgzGridLabelComponent', () => {
  let component: NgzGridLabelComponent;
  let fixture: ComponentFixture<NgzGridLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
