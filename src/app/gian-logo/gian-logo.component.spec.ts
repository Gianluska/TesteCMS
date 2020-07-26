import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GianLogoComponent } from './gian-logo.component';

describe('GianLogoComponent', () => {
  let component: GianLogoComponent;
  let fixture: ComponentFixture<GianLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GianLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GianLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
