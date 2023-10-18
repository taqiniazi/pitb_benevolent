import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLeftSideComponent } from './login-left-side.component';

describe('LoginLeftSideComponent', () => {
  let component: LoginLeftSideComponent;
  let fixture: ComponentFixture<LoginLeftSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLeftSideComponent]
    });
    fixture = TestBed.createComponent(LoginLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
