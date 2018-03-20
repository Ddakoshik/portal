import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';


// import { Router, ActivatedRoute } from '@angular/router';
// import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {


  constructor(
    private authService: AuthService,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.isAuthorizateRoute();
  }

  isAuthorizateRoute() {
    this.afAuth.authState.subscribe(
      i => {
        if (i !== null) {
          console.log(i);

         }
      }
    );
  }


  logout() {
    this.authService.logout();
  }
}
