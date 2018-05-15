import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class UserService {


  private user: Observable<firebase.User>;

  constructor( private router: Router ) {
    // this.user.subscribe(
    //   (user) => {
    //     if (user) {
    //       this.router.navigate(['/dashboard']);
    //     } else {
    //       this.router.navigate(['/auth']);
    //     }
    //   }
    // );
  }




}


