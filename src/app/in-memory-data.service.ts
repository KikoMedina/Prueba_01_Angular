import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pedal } from './pedal';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pedals = [
      { id: 1, name: 'RAT ProCo 2' },
      { id: 2, name: 'Ibanez TS9' },
      { id: 3, name: 'Fulltone Deja-Vibe' },
      { id: 4, name: 'Fulltone Octafuzz OF2' },
      { id: 5, name: 'Electro Harmonix Big Muff' },
      { id: 6, name: 'MXR Phase 90' },
      { id: 7, name: 'Boss DD-7' },
      { id: 8, name: 'Crybaby Dunlop' },
      { id: 9, name: 'Klon ktr Centaur overdrive' }
    ];
    return {pedals};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(pedals: Pedal[]): number {
    return pedals.length > 0 ? Math.max(...pedals.map(pedal => pedal.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/