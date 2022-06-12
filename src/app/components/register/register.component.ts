import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass', '../../app.component.sass'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  isChecked = false;
  constructor() {}

  ngOnInit(): void {}
}
