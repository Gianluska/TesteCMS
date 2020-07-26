import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterUserComponent } from './dialog-register-user.component';

describe('DialogRegisterUserComponent', () => {
  let component: DialogRegisterUserComponent;
  let fixture: ComponentFixture<DialogRegisterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRegisterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
