import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email] - verifies that the email is invalid', () => {
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('example');
    expect(email.errors['email']).toBeTruthy();
  });

  it('[Email] - verifies that the correct email has been entered', () => {
    let email = component.loginForm.controls['email'];
    email.setValue('example@mail.com');
    expect(email.errors).toBeNull();
  });

  it('[Password] - checks that the password is an error', () => {
    let password = component.loginForm.controls['password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('1234');
    expect(password.errors['minlength']).toBeTruthy();
  });

  it('[Password] - checks the validity of the password', () => {
    let password = component.loginForm.controls['password'];
    password.setValue('12345');
    expect(password.errors).toBeNull();
  });

  it('[Remember] - checks that the value is true', () => {
    let remember = component.loginForm.controls['remember'];
    remember.setValue('true');
    expect(remember.value).toEqual('true');
    expect(remember.value).toBeTruthy();
  });

  it('[Remember] - checks that the value is false', () => {
    let remember = component.loginForm.controls['remember'];
    remember.setValue('false');
    expect(remember.value).toEqual('false');
    expect(remember.value).toBeTruthy();
  });

  it('[Form] - checks whether the form is valid or not if no values are entered', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('[Form] - checks whether the form is valid or not when entering values', () => {
    component.loginForm.controls['email'].setValue('example@mail.com');
    component.loginForm.controls['password'].setValue('12345');

    expect(component.loginForm.valid).toBeTruthy();
  });
});
