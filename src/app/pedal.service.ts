import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pedal } from './pedal';
import { PEDALS } from './mock-pedals';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PedalService {
  private pedalsUrl = 'api/pedals';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getPedals(): Observable<Pedal[]> {
    return this.http
      .get<Pedal[]>(this.pedalsUrl)
      .pipe(catchError(this.handleError<Pedal[]>('getPedals', [])));
  }
  getPedal(id: number): Observable<Pedal> {
    const url = `${this.pedalsUrl}/${id}`;
    return this.http.get<Pedal>(url).pipe(
      tap((_) => this.log(`fetched pedal id=${id}`)),
      catchError(this.handleError<Pedal>(`getPedal id=${id}`))
    );
  }
  private log(message: string) {
    this.messageService.add(`PedalService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** PUT: update the pedal on the server */
  updatePedal(pedal: Pedal): Observable<any> {
    return this.http.put(this.pedalsUrl, pedal, this.httpOptions).pipe(
      tap((_) => this.log(`updated pedal id=${pedal.id}`)),
      catchError(this.handleError<any>('updatePedal'))
    );
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  /** POST: add a new pedal to the server */
  addPedal(pedal: Pedal): Observable<Pedal> {
    return this.http.post<Pedal>(this.pedalsUrl, pedal, this.httpOptions).pipe(
      tap((newPedal: Pedal) => this.log(`added pedal w/ id=${newPedal.id}`)),
      catchError(this.handleError<Pedal>('addPedal'))
    );
  }

  /** DELETE: delete the pedal from the server */
  deletePedal(id: number): Observable<Pedal> {
    const url = `${this.pedalsUrl}/${id}`;

    return this.http.delete<Pedal>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted pedal id=${id}`)),
      catchError(this.handleError<Pedal>('deletePedal'))
    );
  }
  /* GET pedals whose name contains search term */
  searchPedals(term: string): Observable<Pedal[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Pedal[]>(`${this.pedalsUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found pedals matching "${term}"`)
          : this.log(`no pedals matching "${term}"`)
      ),
      catchError(this.handleError<Pedal[]>('searchHeroes', []))
    );
  }
}
