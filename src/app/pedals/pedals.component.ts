import { Component, OnInit } from '@angular/core';
import { Pedal } from '../pedal';
import { PedalService } from '../pedal.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-pedals',
  templateUrl: './pedals.component.html',
  styleUrls: ['./pedals.component.css'],
})
export class PedalsComponent implements OnInit {
  pedals: Pedal[] = [];

  constructor(
    private pedalService: PedalService) {}

  ngOnInit(): void {
    this.getPedals();
  }

  getPedals(): void {
    this.pedalService.getPedals().subscribe(pedals => this.pedals = pedals);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pedalService.addPedal({ name } as Pedal)
      .subscribe(pedal => {
        this.pedals.push(pedal);
      });
  }
}
