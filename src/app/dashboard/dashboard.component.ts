import { Component, OnInit } from '@angular/core';
import { faCheese } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faCheese = faCheese;

  constructor() { }

  ngOnInit(): void {
  }

}
