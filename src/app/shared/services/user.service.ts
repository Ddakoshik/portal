import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UsersService {
  private user: Observable<firebase.User>;

  cast: any;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.cast = this.user;
  }


}
