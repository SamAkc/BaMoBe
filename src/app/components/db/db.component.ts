import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.sass']
})
export class DbComponent implements OnInit {

  public data: any;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.performGetPhp();
    console.log(JSON.stringify(this.databaseService.performGetPhp()));
  }

}
