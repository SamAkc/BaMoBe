import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass', '../../app.component.sass'],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor() {}

  ngOnInit(): void {}
}
