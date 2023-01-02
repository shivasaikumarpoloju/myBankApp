import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private route:Router) {

   }

  ngOnInit(): void {
  }
log(){
  console.log('hi');
  this.route.navigate(['loginpage']);
}
}
