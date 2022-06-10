import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slim-header',
  templateUrl: './slim-header.component.html',
  styleUrls: ['./slim-header.component.sass', '../../app.component.sass']
})
export class SlimHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUser = faUser;

}
