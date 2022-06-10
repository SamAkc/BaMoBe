import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    private url = 'http://localhost/test_connection.php';

    public constructor(private http: HttpClient) {
    }

    public performGetPhp() {
      return this.http.get(this.url).pipe(tap(
        data => console.log("All: ", JSON.stringify(data))
      ));
    }
}
