import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div>
  <h3>Edit My Meals</h3>
  <p><strong>Meal</strong>:{{ meal.name }}</p>
  <p><strong>Details</strong>: {{ meal.details}}</p>
  <p><strong>Calories</strong>: {{ meal.calories }}</p>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
