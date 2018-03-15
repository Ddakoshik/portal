import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myFirstReactiveForm: FormGroup;
  
  email: string;
  password: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              public afAuth: AngularFireAuth,
            ) {}


  ngOnInit() {
    this.initForm();
  }

   /** Инициализация формы*/
  initForm() {
    this.myFirstReactiveForm = this.fb.group({
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;
    const email = this.myFirstReactiveForm.value.email;
    const password = this.myFirstReactiveForm.value.password;
    // this.Auth.getUserDitails(username, password)

      /** Проверяем форму на валидность */
      if (this.myFirstReactiveForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

        /** Прерываем выполнение метода*/
        return;
      }

      /** TODO: Обработка данных формы */
      console.log(this.myFirstReactiveForm.value);
      this.login(email, password)
  }
  

  login(email, password) {
     this.authService.login(email, password);
    email = password = '';  
    console.log(email, password,+'all ok');
  }

  logout() {
    this.authService.logout();
  }

  //google login

  logingoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logoutgoogle() {
    this.afAuth.auth.signOut();
  }

 
}
