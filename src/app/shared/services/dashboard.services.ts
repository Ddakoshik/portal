import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Card } from './../models/Card';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DashboardService {

  private heroesUrl = 'localhost:3000/cards';  // URL to web api

  constructor(
    private http: HttpClient,
) { }


  /** GET heroes from the server */
  getHeroes (): Observable<Card[]> {
    return this.http.get<Card[]>(this.heroesUrl);

  }


}
