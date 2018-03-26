import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services/dashboard.services';
import { Card } from '../../shared/models/Card';

@Component({
  selector: 'app-user-add-cart',
  templateUrl: './user-add-cart.component.html',
  styleUrls: ['./user-add-cart.component.css']
})
export class UserAddCartComponent implements OnInit {

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
  }

  addCard() {

  }

}
