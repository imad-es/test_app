import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  ngOnInit(): void {}

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      remember: [''],
    });
  }

  onSubmit(event: Event) {
    if (this.loginForm.valid) {
      console.table('Welcome', this.emailField.value);
      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  get rememberField() {
    return this.loginForm.get('remember');
  }

  get isEmailFieldValid() {
    return this.emailField.touched && this.emailField.valid;
  }

  get isEmailFieldInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get isPasswordFieldValid() {
    return this.passwordField.touched && this.passwordField.valid;
  }
  get isPasswordFieldInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }
}
