import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services/dashboard.services';
import { Card } from '../../shared/models/Card';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-add-cart',
  templateUrl: './user-add-cart.component.html',
  styleUrls: ['./user-add-cart.component.css']
})
export class UserAddCartComponent implements OnInit {

  addNewCardForm: FormGroup;

  cardsinfo: any;
  addCard: any;
  tempsubCats: any;
  public mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/,  /\d/, '-', /\d/, /\d/, /\d/];



  categories: any = [
    {catId: 1,
    name: 'Гітари',
    subCat: [
      {id: 1, name: 'Классические'},
      {id: 2, name: 'Электрогитары'},
      {id: 3, name: 'Акустические'},
      {id: 4, name: 'Бас-гитары'},
      {id: 5, name: 'Укулеле'}
    ]},
    {catId: 2,
      name: 'Клавишные инструменты',
      subCat: [
        {id: 1, name: 'Клависин'},
        {id: 2, name: 'Пионино'},
        {id: 3, name: 'Рояль'},
        {id: 4, name: 'MIDI-клавиатуры'},
        {id: 4, name: 'Клавикорд'},
        {id: 4, name: 'Клавиатура'}
      ]},
    {catId: 3,
      name: 'Ударные',
      subCat: [
        {id: 1, name: 'Ударные установки'},
        {id: 2, name: 'Стандартный барабан'},
      ]},
  ];


  constructor(
    private dashboardservice: DashboardService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();

  }


  initForm() {
    this.addNewCardForm = this.fb.group({
      region: ['', [Validators.required]],
      city: ['', [Validators.required]],
      category: ['', [Validators.required]],
      subСategory: ['', [Validators.required]],
      caption: ['', [Validators.required]],
      description: ['',
      [Validators.required]],
      price: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }


  onSubmitAddNewCardForm() {
    const controls = this.addNewCardForm.controls;
    const region = this.addNewCardForm.value.region;
    const city = this.addNewCardForm.value.city;
    const category = this.addNewCardForm.value.category;
    const subСategory = this.addNewCardForm.value.subСategory;
    const caption = this.addNewCardForm.value.caption;
    const description = this.addNewCardForm.value.description;
    const price = this.addNewCardForm.value.price;
    const phone = this.addNewCardForm.value.phone;


    /** Проверяем форму на валидность */
    if (this.addNewCardForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      console.log('заполните все поля');
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

        /** Прерываем выполнение метода*/
        return;
      }

      /** TODO: Обработка данных формы */
      console.log(this.addNewCardForm.value);
  }

  onSelect() {
    // const controls = this.addNewCardForm.controls;
    const category = this.addNewCardForm.value.category;
    this.tempsubCats = this.categories[category - 1]['subCat'];
  }




  getCardInfo() {
  const newvariable = {
    id: null,
    title: 'Новая тест гитара',
    groupid: 1,
    group: 'Баз',
    price: '1112',
    about: 'почти новая гитара я ей почти не пользовался только 2 раза падала, а так нормальній инструмент',
    vipstatus: false,
    hrefimg: '/assets/img/5_cme-mkey-.jpg'
  };
  return newvariable;

  }




  addCardfunc() {
    const peremennaya = this.getCardInfo();
    this.dashboardservice.postCard(peremennaya).subscribe(
      res => console.log(res)
    );
  }


  getCards() {
      this.dashboardservice.getCards()
      .subscribe((data: any[]) => {
      this.cardsinfo = data;
      }
    );
  }



}
