import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable()
export class UsersService {
  private user: Observable<firebase.User>;

  uEmail: BehaviorSubject<string|null>;

  constructor(public afAuth: AngularFireAuth) {
    this.uEmail = new BehaviorSubject(null);

    this.user = afAuth.authState;
    this.user.subscribe(
      x => {
        if (x !== undefined && x !== null) {
          this.uEmail.next(x.email);
        }
      });
  }


}
