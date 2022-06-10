import { Injectable } from '@angular/core';
import { Summary } from './../../model/summary';
import { SUMMARIES } from './../../mock-summaries';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor() { }

  getSummaries(): Observable<Summary[]> {
    const summaries = of(SUMMARIES);
    return summaries;
  }
}
