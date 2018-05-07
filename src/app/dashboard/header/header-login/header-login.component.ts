import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  @Input('myuser') myuser;
  @Output() logout =  new EventEmitter();


  constructor(    private router: Router  ) { }

  ngOnInit() {
  }


  takeRoutAddCard() {
    if (this.myuser !== null) {
      this.router.navigate(['/user-page/add-cart']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }


  fLogout() {
    console.log('logout');
    this.logout.emit('ex');
  //  this.authService.logout();
  }
}



