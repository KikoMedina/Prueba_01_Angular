import { Component, OnInit } from '@angular/core';
import { Pedal } from '../pedal';

@Component({
  selector: 'app-pedals',
  templateUrl: './pedals.component.html',
  styleUrls: ['./pedals.component.css'],
})
export class PedalsComponent implements OnInit {
  pedal: Pedal = {
    id: 1,
    name: 'Dunlop Fuzz Face',
  };

  constructor() {}

  ngOnInit(): void {}
}
