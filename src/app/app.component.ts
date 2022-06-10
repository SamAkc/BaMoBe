import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'mobility-advisor';

  slimHeader = false;
  footer = false;
  routerLink = "";

  constructor(private router: Router) {
  }

  ngOnInit(){
   this.getCurrentRouterLink();
  }

 routerChangeMethod(url: string){
   this.routerLink = url;

   if(this.routerLink === "/summaries" || this.routerLink === "/feedback" || this.routerLink === "/environment") {
    this.slimHeader = true;
   } else {
     this.slimHeader = false;
   }

   if(this.routerLink === "/") {
    this.routerLink = "/start";
   }

  if(this.routerLink !== "/start") {
    this.footer = true;
   } else {
     this.footer = false;
   }
 }

 getCurrentRouterLink() {
  this.router.events.subscribe(event =>{
     if (event instanceof NavigationStart){
        console.log(event.url)
        this.routerChangeMethod(event.url);
     }
  })
 }
}
