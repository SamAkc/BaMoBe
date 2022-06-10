import { Injectable } from '@angular/core';
import { Route } from '../../model/route';
import { ROUTES } from './../../mock-routes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  getRoutes(): Observable<Route[]> {
    const routes = of(ROUTES);
    return routes;
  }
}
