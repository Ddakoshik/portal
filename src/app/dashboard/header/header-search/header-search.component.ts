import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {
  categories = [
    {value: 'steak-0', viewValue: 'Все категории'},
    {value: 'pizza-1', viewValue: 'Гитары'},
    {value: 'tacos-2', viewValue: 'Клавишные инструменты'},
    {value: 'tacos-2', viewValue: 'Ударные'},
    {value: 'tacos-2', viewValue: 'Духовые деревянные'},
    {value: 'tacos-2', viewValue: 'Духовые медные'}
  ];

  cities = [
    {value: 'steak-0', viewValue: 'Все города'},
    {value: 'pizza-1', viewValue: 'Житомир'},
    {value: 'tacos-2', viewValue: 'Киев'},
    {value: 'tacos-2', viewValue: 'Львов'},
    {value: 'tacos-2', viewValue: 'Харьков'},
    {value: 'tacos-2', viewValue: 'Ялта'}
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
