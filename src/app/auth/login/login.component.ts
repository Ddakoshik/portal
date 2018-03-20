import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

import { AngularFireAuth  } from 'angularfire2/auth';
// import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
// import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string;
  password: string;

  constructor(
              private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              public afAuth: AngularFireAuth,
            ) {}

  ngOnInit() {
    this.initForm();
    this.isAuthorizateRoute();
  }

  // Роут если пользователь авторизировался

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

   /** Инициализация формы*/
  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]]
    });
  }

  onSubmit() {
    const controls = this.loginForm.controls;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    // this.Auth.getUserDitails(username, password)

      /** Проверяем форму на валидность */
      if (this.loginForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

        /** Прерываем выполнение метода*/
        return;
      }

      /** TODO: Обработка данных формы */
      console.log(this.loginForm.value);
      this.login(email, password);
  }

  login(email, password) {
     this.authService.login(email, password);
    email = password = '';
  }

  logingoogle() {
    this.authService.logingoogle();
  }

  logout() {
    this.authService.logout();
  }
}
