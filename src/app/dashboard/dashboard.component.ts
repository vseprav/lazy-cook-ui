import { Component, OnInit } from '@angular/core';
import { faCheese } from '@fortawesome/free-solid-svg-icons';
import {IngredientsService} from '../services/ingredients.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faCheese = faCheese;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.ingredientsService.get().subscribe(result => {
      console.log(result);
    });
  }

}
