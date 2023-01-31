import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pedal } from './pedal';
import { PEDALS } from './mock-pedals';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PedalService {
  constructor(private messageService: MessageService) {}
  getPedals(): Observable<Pedal[]> {
    const pedals = of(PEDALS);
    this.messageService.add('PedalService: fetched pedals');
    return pedals;
  }
  getPedal(id: number): Observable<Pedal> {
    const pedal = PEDALS.find((h) => h.id === id)!;
    this.messageService.add(`PedalService: fetched pedal id=${id}`);
  }
}
