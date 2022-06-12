import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faShoppingBag, faBicycle, faUtensils, faBolt, faCar, faBus, faLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.sass', '../../app.component.sass']
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

  constructor() { }

  ngOnInit(): void {
  }

}
