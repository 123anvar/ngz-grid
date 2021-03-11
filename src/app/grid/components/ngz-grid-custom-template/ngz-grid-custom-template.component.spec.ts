import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridCustomTemplateComponent } from './ngz-grid-custom-template.component';

describe('NgzGridCustomTemplateComponent', () => {
  let component: NgzGridCustomTemplateComponent;
  let fixture: ComponentFixture<NgzGridCustomTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridCustomTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridCustomTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
