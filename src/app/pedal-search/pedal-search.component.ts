import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Pedal } from '../pedal';
import { PedalService } from '../pedal.service';

@Component({
  selector: 'app-pedal-search',
  templateUrl: './pedal-search.component.html',
  styleUrls: ['./pedal-search.component.css'],
})
export class PedalSearchComponent implements OnInit {
  pedals$!: Observable<Pedal[]>;
  private searchTerms = new Subject<string>();

  constructor(private pedalService: PedalService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pedals$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.pedalService.searchPedals(term))
    );
  }
}
