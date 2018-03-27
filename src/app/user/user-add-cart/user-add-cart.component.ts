import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services/dashboard.services';
import { Card } from '../../shared/models/Card';

@Component({
  selector: 'app-user-add-cart',
  templateUrl: './user-add-cart.component.html',
  styleUrls: ['./user-add-cart.component.css']
})
export class UserAddCartComponent implements OnInit {
  cardsinfo: any;
  addCard: any;


  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
    // this.getCards();
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
