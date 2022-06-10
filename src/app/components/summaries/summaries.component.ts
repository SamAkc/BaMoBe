import { Component, OnInit, ViewChild } from '@angular/core';
import { SummaryService } from 'src/app/services/summaries/summary.service';
import { Route } from '../../model/route';
import { RouteService } from './../../services/routes/route.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.sass', '../../app.component.sass'],
})
export class SummariesComponent implements OnInit {
  /* Icons */
  faLeaf = faLeaf;
  faTree = faTree;
  faUserFriends = faUserFriends;
  faBoltLightning = faBoltLightning;
  faBus = faBus;
  faClock = faClock;
  faMoneyBill = faMoneyBill;
  faRoute = faRoute;
  faFireFlameCurved = faFireFlameCurved;

  /* Table */
  displayedColumns: string[] = ['strecken', 'transportmittel', 'anzahl', 'cO2', 'kosten', 'zeit', 'entfernung', 'kalorienverbrauch'];

  /* Summaries */
  summariesFormGroup: FormGroup;
  carbon = true;
  costs = true;
  time = true;
  distance = true;
  calories = true;

  totalCarbonmonoxide = 0;
  totalCosts = 0;
  totalTime = 0;
  totalDistance = 0;
  totalCalories = 0;

  displayCarbonmonoxide = false;
  displayCosts = false;
  displayTime = false;
  displayDistance = false;
  displayCalories = false;
  displayTable = false;

  /* Routes */
  routesFormGroup: FormGroup;
  routeOne = true;
  routeTwo = true;
  routeThree = true;
  routeFour = true;
  routeFive = true;
  routes: Route[] = [];
  routesToBeIncluded: Route[] = [];
  routesToBeDisplayed: Route[] = [];

  /* Time */
  selectedTime: string = 'Wöchentlich';
  displayTimeSelector = false;

  constructor(private routeService: RouteService, private summaryService: SummaryService, fb: FormBuilder) {
    this.summariesFormGroup = fb.group({
      carbonmonoxide: true,
      costs: true,
      time: true,
      distance: true,
      calories: true,
    });

    this.routesFormGroup = fb.group({
      routeOne: true,
      routeTwo: true,
      routeThree: true,
      routeFour: true,
      routeFive: true,
    });
  }

  ngOnInit(): void {
    this.getRoutes();

    this.submitSummaries();
    this.submitRoutes();
  }

  getRoutes(): void {
    this.routeService.getRoutes().subscribe((routes) => (this.routes = routes, this.routesToBeDisplayed = routes, this.routesToBeIncluded = routes));
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if(tabChangeEvent.index == 1) {
      this.displayTimeSelector = true;
    } else {
      this.displayTimeSelector = false;
    }
  }

  submitSummaries() {
    var totalSummaries = this.summariesFormGroup.value;

    if (
      totalSummaries.carbonmonoxide ||
      totalSummaries.costs ||
      totalSummaries.time ||
      totalSummaries.distance ||
      totalSummaries.calories
    ) {
      this.displayTable = true;
    } else {
      this.displayTable = false;
    }

    if (totalSummaries.carbonmonoxide) {
      this.displayCarbonmonoxide = true;
    } else {
      this.displayCarbonmonoxide = false;
    }

    if (totalSummaries.costs) {
      this.displayCosts = true;
    } else {
      this.displayCosts = false;
    }

    if (totalSummaries.time) {
      this.displayTime = true;
    } else {
      this.displayTime = false;
    }

    if (totalSummaries.distance) {
      this.displayDistance = true;
    } else {
      this.displayDistance = false;
    }

    if (totalSummaries.calories) {
      this.displayCalories = true;
    } else {
      this.displayCalories = false;
    }
  }

  submitRoutes() {
    this.routesToBeIncluded = [];

    var totalRoutes = this.routesFormGroup.value;

    if (totalRoutes.routeOne) {
      this.routesToBeIncluded.push(this.routes.filter((route) => route.id == 1)[0]);
    }

    if (totalRoutes.routeTwo) {
      this.routesToBeIncluded.push(this.routes.filter((route) => route.id == 2)[0]);
    }

    if (totalRoutes.routeThree) {
      this.routesToBeIncluded.push(this.routes.filter((route) => route.id == 3)[0]);
    }

    if (totalRoutes.routeFour) {
      this.routesToBeIncluded.push(this.routes.filter((route) => route.id == 4)[0]);
    }

    if (totalRoutes.routeFive) {
      this.routesToBeIncluded.push(this.routes.filter((route) => route.id == 5)[0]);
    }

    this.optionChanged();
  }

  optionChanged() {
    this.totalCarbonmonoxide = 0;
    this.totalCosts = 0;
    this.totalTime = 0;
    this.totalDistance = 0;
    this.totalCalories = 0;

    if (this.selectedTime == 'Täglich') {
      this.getTotalDailyAssumptions();
    } else if (this.selectedTime == 'Wöchentlich') {
      this.getTotalWeeklyAssumptions();
    } else if (this.selectedTime == 'Monatlich') {
      this.getTotalMonthlyAssumptions();
    } else if (this.selectedTime == 'Jährlich') {
      this.getTotalYearlyAssumptions();
    }
  }

  getTotalWeeklyAssumptions() {
    this.routesToBeIncluded.forEach(route => {
      this.totalCarbonmonoxide = this.totalCarbonmonoxide + route.carbonmonoxide * route.frequency;
      this.totalCosts = this.totalCosts + route.costs * route.frequency;
      this.totalTime = this.totalTime + route.time * route.frequency;
      this.totalDistance = this.totalDistance + route.distance * route.frequency;
      this.totalCalories = this.totalCalories + route.calories * route.frequency;
    })
  }

  getTotalMonthlyAssumptions() {
    this.routesToBeIncluded.forEach(route => {
      this.totalCarbonmonoxide = this.totalCarbonmonoxide + route.carbonmonoxide * route.frequency * 4;
      this.totalCosts = this.totalCosts + route.costs * route.frequency * 4;
      this.totalTime = this.totalTime + route.time * route.frequency * 4;
      this.totalDistance = this.totalDistance + route.distance * route.frequency * 4;
      this.totalCalories = this.totalCalories + route.calories * route.frequency * 4;
    })
  }

  getTotalYearlyAssumptions() {
    this.routesToBeIncluded.forEach(route => {
      this.totalCarbonmonoxide = this.totalCarbonmonoxide + route.carbonmonoxide * route.frequency * 52;
      this.totalCosts = this.totalCosts + route.costs * route.frequency * 52;
      this.totalTime = this.totalTime + route.time * route.frequency * 52;
      this.totalDistance = this.totalDistance + route.distance * route.frequency * 52;
      this.totalCalories = this.totalCalories + route.calories * route.frequency * 52;
    })
  }

  getTotalDailyAssumptions() {
    this.routesToBeIncluded.forEach(route => {
      this.totalCarbonmonoxide = this.totalCarbonmonoxide + route.carbonmonoxide * route.frequency / 7;
      this.totalCosts = this.totalCosts + route.costs * route.frequency / 7;
      this.totalTime = this.totalTime + route.time * route.frequency / 7;
      this.totalDistance = this.totalDistance + route.distance * route.frequency / 7;
      this.totalCalories = this.totalCalories + route.calories * route.frequency / 7;
    })
  }
}
