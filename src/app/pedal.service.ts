import { Injectable } from '@angular/core';
import { Pedal } from './pedal';
import { PEDALS } from './mock-pedals';

@Injectable({
  providedIn: 'root',
})
export class PedalService {
  constructor() {}
  getPedals(): Pedal[] {
    return PEDALS;
  }
}
