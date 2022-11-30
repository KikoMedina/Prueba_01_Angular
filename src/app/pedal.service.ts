import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pedal } from './pedal';
import { PEDALS } from './mock-pedals';

@Injectable({
  providedIn: 'root',
})
export class PedalService {
  constructor() {}
  getPedals(): Observable<Pedal[]> {
    const pedals = of(PEDALS);
    return pedals;
  }
}
