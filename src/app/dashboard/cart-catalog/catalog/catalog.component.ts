import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  cards = [
    {id: 1, title: 'Гитара', groupid: 1,  group: 'Баз' , price: 1000,
    about: 'Следует признать, что ближайшие конкуренты — Laravel и Symfony — внедряют новые фишки и выпускают версии гораздо резвее. У обоих конкурентов уже есть LTS-версии. Yii 2.1 вроде бы тоже должна иметь long-term support.',
     vipstatus: true, hrefimg: '/assets/img/5_cme-mkey-.jpg'},
     {id: 2, title: 'Гитара', groupid: 1,  group: 'Баз' , price: 1200,
     about: 'Следует признать, что ближайшие конкуренты — Laravel и Symfony — внедряют новые фишки и выпускают версии гораздо резвее. У обоих конкурентов уже есть LTS-версии. Yii 2.1 вроде бы тоже должна иметь long-term support.',
     vipstatus: true, hrefimg: '/assets/img/5_cme-mkey-.jpg'},
     {id: 3, title: 'Гитара', groupid: 1,  group: 'Баз' , price: 1200,
     about: 'Следует признать, что ближайшие конкуренты — Laravel и Symfony — внедряют новые фишки и выпускают версии гораздо резвее. У обоих конкурентов уже есть LTS-версии. Yii 2.1 вроде бы тоже должна иметь long-term support.',
     vipstatus: false, hrefimg: '/assets/img/5_cme-mkey-.jpg'},
     {id: 4, title: 'Гитара', groupid: 1,  group: 'Баз' , price: 1200,
     about: 'Следует признать, что ближайшие конкуренты — Laravel и Symfony — внедряют новые фишки и выпускают версии гораздо резвее. У обоих конкурентов уже есть LTS-версии. Yii 2.1 вроде бы тоже должна иметь long-term support.',
     vipstatus: false, hrefimg: '/assets/img/5_cme-mkey-.jpg'},
     {id: 5, title: 'Гитара', groupid: 1,  group: 'Баз' , price: 1200,
     about: 'Следует признать, что ближайшие конкуренты — Laravel и Symfony — внедряют новые фишки и выпускают версии гораздо резвее. У обоих конкурентов уже есть LTS-версии. Yii 2.1 вроде бы тоже должна иметь long-term support.',
     vipstatus: true, hrefimg: '/assets/img/5_cme-mkey-.jpg'},
     {id: 6, title: 'Гитара', groupid: 1,  group: 'Баз' , price: 1200,
     about: 'Следует признать, что ближайшие конкуренты — Laravel и Symfony — внедряют новые фишки и выпускают версии гораздо резвее. У обоих конкурентов уже есть LTS-версии. Yii 2.1 вроде бы тоже должна иметь long-term support.',
     vipstatus: false, hrefimg: '/assets/img/5_cme-mkey-.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
