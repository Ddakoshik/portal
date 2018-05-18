import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import {switchMap,map, mergeMap, catchError, delay} from 'rxjs/operators';
import { UsersService } from '../../shared/services/user.service';
import { AngularFireDatabase, AngularFireAction, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SettingsResolver implements Resolve<Observable<any>> {


    simpleUser ;
    email;

    constructor(private userService: UsersService,
                private db: AngularFireDatabase,
                public afAuth: AngularFireAuth) {}

    resolve() {
        return this.afAuth.authState.pipe(
            map(x => console.log(x))
        );
        // this.userService.uEmail.subscribe(em => {
        //     console.log('resolver', em);
        //     return em;
        // });

        //  this.userService.uEmail.pipe(

        //     mergeMap(em => {
        //         if (em) {
        //             console.log(em);
        //             return em;
        //         } else { of('elese', em);
        //         }
        //     }),
        //     catchError(x => of('eror', x))
        //         //         ).snapshotChanges()
        //         //       )
        // );
        //  return of('test');
    }



}
