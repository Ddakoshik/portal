import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-catalog',
  templateUrl: './vip-catalog.component.html',
  styleUrls: ['./vip-catalog.component.css']
})
export class VipCatalogComponent implements OnInit {

  cards = [
    {id: 1, title: 'Гитара', groupid: 1,  group: 'Баз' , price: 1000,
    about: 'Следует признать, что ближайшие конкуренты — Laravel и Symfony — внедряют новые фишки и выпускают версии гораздо резвее. У обоих конкурентов уже есть LTS-версии. Yii 2.1 вроде бы тоже должна иметь long-term support.',
    vipstatus: true, hrefimg: '/assets/img/5_cme-mkey-.jpg'},
    {id: 2, title: 'Гитара', groupid: 1,  group: 'Баз' , price: 1200,
    about: 'Следует признать, что ближайшие конкуренты — Laravel и Symfony — внедряют новые фишки и выпускают версии гораздо резвее. У обоих конкурентов уже есть LTS-версии. Yii 2.1 вроде бы тоже должна иметь long-term support.',
    vipstatus: true, hrefimg: '/assets/img/5_cme-mkey-.jpg'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
