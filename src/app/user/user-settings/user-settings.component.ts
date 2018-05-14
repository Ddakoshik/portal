import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { AngularFireDatabase, AngularFireAction, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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
  item: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase
  ) {
    this.item = db.list('items').valueChanges();
   }

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
    name,
    city,
    phone,
    sex,
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
    const date = new Date();
    const itemRef = this.db.object(`cards/${date.getTime()}${date.getMilliseconds()}`);
    itemRef.set(newvariable);

}

onSelect() {
  const category = this.userSettingForm.value.sex;
  this.tempsubCats = this.sexofaperson[category - 1]['subCat'];
}
}
