import { Component, OnInit } from '@angular/core';
import { Pedal } from '../pedal';
import { PedalService } from '../pedal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  pedals: Pedal[] = [];

  constructor(private pedalService: PedalService) {}

  ngOnInit(): void {
    this.getPedals();
  }

  getPedals(): void {
    this.pedalService
      .getPedals()
      .subscribe((pedals) => (this.pedals = pedals.slice(1, 5)));
  }
}
