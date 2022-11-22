import { Pedal } from '../pedal';
import { Component, OnInit, Input } from '@angular/core'

@Component ({
  selector: 'app-pedal-detail',
  templateUrl: './pedal-detail.component.html',
  styleUrls: ['./pedal-detail.component.css']
})
export class PedalDetailComponent implements OnInit {
  @Input() pedal?: Pedal;

  constructor()  { }

  ngOnInit(): void  { 
  }

}