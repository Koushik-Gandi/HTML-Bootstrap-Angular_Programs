import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecomponentnameComponent } from './mobilecomponentname.component';

describe('MobilecomponentnameComponent', () => {
  let component: MobilecomponentnameComponent;
  let fixture: ComponentFixture<MobilecomponentnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilecomponentnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecomponentnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
