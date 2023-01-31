import { Pedal } from '../pedal';
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PedalService } from '../pedal.service';

@Component({
  selector: 'app-pedal-detail',
  templateUrl: './pedal-detail.component.html',
  styleUrls: ['./pedal-detail.component.css'],
})
export class PedalDetailComponent implements OnInit {
  @Input() pedal?: Pedal;

  constructor(
    private route: ActivatedRoute,
    private heroService: PedalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPedal();
  }

  getPedal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pedalService.getPedal(id).subscribe((pedal) => (this.pedal = pedal));
  }
  goBack(): void {
    this.location.back();
  }
}
