import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

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
