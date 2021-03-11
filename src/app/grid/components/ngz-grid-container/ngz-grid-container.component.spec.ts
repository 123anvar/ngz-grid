import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridContainerComponent } from './ngz-grid-container.component';

describe('NgzGridContainerComponent', () => {
  let component: NgzGridContainerComponent;
  let fixture: ComponentFixture<NgzGridContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
