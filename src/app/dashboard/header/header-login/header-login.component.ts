import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  @Input('myuser') myuser;
  @Output() logout =  new EventEmitter();

  myroute = '/auth';

  constructor(
    // private authService: AuthService,
    // public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    console.log('my', this.myuser);
    if (this.myuser !== null) {
      this.myroute = '/add';
    }
   // console.log('init', this.authService.uEmail);
    // this.isAuthorizateRoute();
  }


test() {
  if (this.myuser != null ) {
    console.log(this.myuser.email);
  } else {
    console.log('НЕМА');
  }

}

  fLogout() {
    console.log('logout');
    this.logout.emit('ex');
  //  this.authService.logout();
  }
}
