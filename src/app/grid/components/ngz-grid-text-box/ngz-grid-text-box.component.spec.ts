import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzGridTextBoxComponent } from './ngz-grid-text-box.component';

describe('NgzGridTextBoxComponent', () => {
  let component: NgzGridTextBoxComponent;
  let fixture: ComponentFixture<NgzGridTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzGridTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzGridTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
