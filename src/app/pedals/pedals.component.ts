import { Component, OnInit } from '@angular/core';
import { Pedal } from '../pedal';
import { PedalService } from '../pedal.service';

@Component({
  selector: 'app-pedals',
  templateUrl: './pedals.component.html',
  styleUrls: ['./pedals.component.css'],
})
export class PedalsComponent implements OnInit {
  pedals: Pedal[] = [];
  selectedPedal?: Pedal;

  constructor(private pedalService: PedalService) {}

  ngOnInit(): void {
    this.getPedals();
  }

  onSelect(pedal: Pedal): void {
    this.selectedPedal = pedal;
  }

  getPedals(): void {
    this.pedalService.getPedals()
      .subscribe(pedals => this.pedals = pedals)
  }
}
