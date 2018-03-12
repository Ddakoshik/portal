import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myFirstReactiveForm: FormGroup;

  constructor(private fb: FormBuilder,
              private Auth: AuthService) {}


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

    const username = this.myFirstReactiveForm.value.email;
    const password = this.myFirstReactiveForm.value.password;
    this.Auth.getUserDitails(username, password)

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
    }

}

