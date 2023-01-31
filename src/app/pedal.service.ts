import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pedal } from './pedal';
import { PEDALS } from './mock-pedals';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const pedals = of(PEDALS);
    this.messageService.add('PedalService: fetched pedals');
    return pedals;
  }
  getPedal(id: number): Observable<Pedal> {
    const pedal = PEDALS.find((p) => p.id === id)!;
    this.messageService.add(`PedalService: fetched pedal id=${id}`);
    return of(pedal);
  }
  private log(message: string) {
    this.messageService.add(`PedalService: ${message}`);
  }
}
