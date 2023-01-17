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
  selectedPedal?: Pedal;
  pedals: Pedal[] = [];

  constructor(
    private pedalService: PedalService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getPedals();
  }

  onSelect(pedal: Pedal): void {
    this.selectedPedal = pedal;
    this.messageService.add(`PedalsComponent: Selected pedal id=${pedal.id}`);
  }

  getPedals(): void {
    this.pedalService.getPedals().subscribe((pedals) => (this.pedals = pedals));
  }
}
