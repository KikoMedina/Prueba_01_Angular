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
      tap(_ => this.log(`fetched pedal id=${id}`)),
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
}
