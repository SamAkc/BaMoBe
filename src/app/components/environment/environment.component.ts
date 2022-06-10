import { Component, HostBinding, OnInit } from '@angular/core';
import { faMagnifyingGlass, faShoppingBag, faBicycle, faUtensils, faBolt, faCar, faBus, faLocation } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.sass', '../../app.component.sass'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class EnvironmentComponent implements OnInit {
  /* Icons */
  faLocation = faLocation;
  faMagnifyingGlass = faMagnifyingGlass;
  faShoppingBag = faShoppingBag;
  faBicycle = faBicycle;
  faUtensils = faUtensils;
  faBolt = faBolt;
  faCar = faCar;
  faBus = faBus;

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
