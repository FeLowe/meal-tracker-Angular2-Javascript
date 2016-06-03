import { Component } from 'angular2/core';
import { Meal } from './meal.model'

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <h3>{{ meal.name }}</h3>
  <p><strong>Details</strong>: {{ meal.details}}</p>
  <p><strong>Calories</strong>: {{ meal.calories }}</p>
  `
})

export class MealComponent {
  public meal: Meal;
}
