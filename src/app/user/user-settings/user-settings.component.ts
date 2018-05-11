import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  userSettingForm: FormGroup;
  tempsubCats: any;
  public mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/,  /\d/, '-', /\d/, /\d/, /\d/];
  sexofaperson: any = [
    {sexId: 1, name: 'Мужчина'},
    {sexId: 2, name: 'Женщина'}
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.userSettingForm = this.fb.group({
      name: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
}

onSubmitAddNewCardForm() {
  const controls = this.userSettingForm.controls;
  const name = this.userSettingForm.value.name;
  const sex = this.userSettingForm.value.sex;
  const city = this.userSettingForm.value.city;
  const phone = this.userSettingForm.value.phone;


  const newvariable = {
    id: null,
    city,
    phone,
    vipstatus: false,
    };
    console.log(newvariable);

  /** Проверяем форму на валидность */
  if (this.userSettingForm.invalid) {
    /** Если форма не валидна, то помечаем все контролы как touched*/
    console.log('заполните все поля');
    Object.keys(controls)
      .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }

    console.log(this.userSettingForm.value);

}

onSelect() {
  const category = this.userSettingForm.value.sex;
  this.tempsubCats = this.sexofaperson[category - 1]['subCat'];
}
}
