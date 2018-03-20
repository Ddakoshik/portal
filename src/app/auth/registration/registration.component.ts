import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


import { AngularFireAuth  } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;


  email: string;
  password: string;
  confirmPassword: string;



  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService) {
  }



  initForm() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]]
    },  {validator: this.matchingPasswords('password', 'confirmPassword')} );
  }


  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  isAuthorizateRoute() {
    this.afAuth.authState.subscribe(
      i => {
        if (i !== null) {
          this.router.navigate(['']);
        }
        return i;
      }
    );
  }
  onSubmit() {
    const controls = this.registrationForm.controls;
    const email = this.registrationForm.value.email;
    const password = this.registrationForm.value.password;
    // this.Auth.getUserDitails(username, password)

      //  Проверяем форму на валидность
      if (this.registrationForm.invalid) {
     // Если форма не валидна, то помечаем все контролы как touched
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

        // Прерываем выполнение метода
        return;
      }

      // TODO: Обработка данных формы
      console.log(this.registrationForm.value);
      this.signup(email, password);
  }


  signup(email, password) {
    this.authService.signup(email, password);
    email = password = '';
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.initForm();
    this.isAuthorizateRoute();
  }

}
