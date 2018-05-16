import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { AngularFireDatabase, AngularFireAction, AngularFireObject } from 'angularfire2/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UsersService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {


  editeble = false;
  userSettingForm: FormGroup;
  tempsubCats: any;
  public mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/,  /\d/, '-', /\d/, /\d/, /\d/];
  sexofaperson: any = [
    {sexId: 1, name: 'Мужчина'},
    {sexId: 2, name: 'Женщина'}
  ];
  userinfo: Observable<any>;
  userData: any;
  email: Observable<string|null>;
  users;

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private UserServ: UsersService
  ) {
      this.email = this.UserServ.uEmail;
      console.log(this.email);
  }

  ngOnInit() {
    this.initForm();
    this.userinfo = this.email.pipe(
      switchMap(em =>
            this.db.list('users', ref =>
              em ? ref.orderByChild('email').equalTo(em) : ref
            ).snapshotChanges()
          )
    );
    // const xy = this.userinfo.subscribe(items => {
    //   this.userData = items;
    //   console.log('userData', this.userData);
    //   this.userinfo.map( res => console.log('respayload', res.payload));
    // });
    console.log('userInfo', this.userinfo);

    const x = this.db.list(`users` , ref => ref.orderByKey().equalTo('roobotik_gmail_com'));
    x.snapshotChanges().subscribe(item => {
      // Вариантик 2
      this.users = item;
      console.log('123', this.users);

    //   // Оригинал
    //   item.forEach(element => {
    //     const y = element.payload.toJSON();
    //     y['$key'] = element.key;
    //     this.users.push(y);
    //     console.log(y);
    //   });
    });

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
  const email = this.UserServ.uEmail;
  // const acauntName = this.UserServ.uEmail.replace(/@/g, '_').replace('.', '_');
  const acauntName = 'roobot_i_ua';
  const date = new Date();
  const userRoles = 'user';


  const newvariable = {
    id: null,
    name,
    city,
    phone,
    sex,
    vipstatus: false,
    email,
    date,
    userRoles
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


    const itemRef = this.db.object(`users/${acauntName}/`);
    itemRef.set(newvariable);

}

onSelect() {
  const category = this.userSettingForm.value.sex;
  this.tempsubCats = this.sexofaperson[category - 1]['subCat'];
}
}
