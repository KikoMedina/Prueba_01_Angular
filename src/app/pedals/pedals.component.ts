import { Component, OnInit } from '@angular/core';
import { Pedal } from '../pedal';
import { PEDALS } from '../pedals';


@Component({
  selector: 'app-pedals',
  templateUrl: './pedals.component.html',
  styleUrls: ['./pedals.component.css']
})

export class PedalsComponent implements OnInit {

  pedals = PEDALS;

  constructor() {}

  ngOnInit(): void {}
}
