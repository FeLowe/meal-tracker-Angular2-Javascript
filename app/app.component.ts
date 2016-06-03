import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)='mealWasSelected($event)'>
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
      new Meal("Fries", "I only ate half of them.", 365, 1),
      new Meal("Garden salad", "No dressing added, just lime and olive oil. Delicious, colorful salad!", 200, 2),
      new Meal("Big Mac Meal", "Large fries with lots of ketchup, large soda", 1000, 3),
      new Meal("Taco Dinner", "3 tacos, rice, beans, guacamole, house salad", 550, 4)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void{
  }
}
