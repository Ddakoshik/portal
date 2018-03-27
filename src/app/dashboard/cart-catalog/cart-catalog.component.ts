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
  cardsVip: Card[] = [];
  constructor(private dashboardservice: DashboardService) {}

  ngOnInit() {
    this.getCards();
    this.getCardsVip();

  }

  getCards(): void {
    this.dashboardservice.getCards()
      .subscribe((data: any[]) => {
        this.cards = data;
        // console.log(this.cards);
       }
    );
  }

  getCardsVip() {
    this.dashboardservice.getCardsVip()
      .subscribe((data: any[]) => {
        this.cardsVip = data;
        // console.log(this.cardsVip);
       }
    );
  }
}
