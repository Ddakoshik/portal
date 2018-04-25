import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

import { UsersService } from '../../shared/services/user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usertest;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    public afAuth: AngularFireAuth) {
    }

  ngOnInit() {
    this.usersService.cast.subscribe(user => this.usertest = user);
    console.log('go', this.usertest);
  }

  mainlogout() {
    console.log('I am logout form firebase');
     this.authService.logout();
  }

}
