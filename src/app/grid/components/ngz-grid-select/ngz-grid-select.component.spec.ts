import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridSelectComponent } from './ngz-grid-select.component';

describe('NgzGridSelectComponent', () => {
  let component: NgzGridSelectComponent;
  let fixture: ComponentFixture<NgzGridSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
