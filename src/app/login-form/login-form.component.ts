import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  hide = true;

  form: FormGroup = new FormGroup({
    userFormController: new FormControl('', [Validators.required]),
    passwordFormController: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  public get isFormValid() {
    return (
      this.form.controls['userFormController'].valid &&
      this.form.controls['passwordFormController'].valid
    );
  }
}
