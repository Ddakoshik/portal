import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UsersService {
  private user: Observable<firebase.User>;

  uEmail: any;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe(
      x => {
        if (x !== undefined && x !== null) {
          this.uEmail = x.email;
        }
      });
  }


}
