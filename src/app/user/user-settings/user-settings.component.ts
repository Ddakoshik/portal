import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { AngularFireDatabase, AngularFireAction, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';

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
  email = this.UserServ.uEmail;

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private UserServ: UsersService
  ) {
    this.userinfo = db.list(`/users/`, ref => this.email ? ref.orderByChild('email').equalTo(this.email) : ref).valueChanges();
    console.log('1', this.userinfo);
    // this.userinfo = db.list(`/users/roobot_i_ua`).valueChanges();
    // console.log('1', this.userinfo);

   }

  ngOnInit() {
    this.initForm();

  }


  // constructor(db: AngularFireDatabase) {
  //   this.size$ = new BehaviorSubject(null);
  //   this.items$ = this.size$.pipe(
  //     switchMap(size =>
  //       db.list('/items', ref =>
  //         size ? ref.orderByChild('size').equalTo(size) : ref
  //       ).snapshotChanges()
  //     )
  //   );
  // }


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
  const acauntName = this.UserServ.uEmail.replace(/@/g, '_').replace('.', '_');
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
