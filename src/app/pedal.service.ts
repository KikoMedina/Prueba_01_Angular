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
}
