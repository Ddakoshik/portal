import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services/dashboard.services';
import { Card } from '../../shared/models/Card';

@Component({
  selector: 'app-cart-catalog',
  templateUrl: './cart-catalog.component.html',
  styleUrls: ['./cart-catalog.component.css']
})
export class CartCatalogComponent implements OnInit {

  cards: Card[] = [];
  constructor(private dashboardservice: DashboardService) {}

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.dashboardservice.getHeroes()
      .subscribe(cards => this.cards = cards);
      console.log(this.cards);
  }

}
