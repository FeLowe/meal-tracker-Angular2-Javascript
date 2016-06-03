import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.compoment';
import { NewMealComponent } from './new-meal.component';
import {HealthyPipe} from './healthy.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [HealthyPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">All</option>
    <option value="healthy">Healthy</option>
    <option value="notHealthy" selected="selected">Not Healthy</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList"
    (click)="mealClicked(currentMeal)"
    [class.selected]='currentMeal === selectedMeal'
    [meal]='currentMeal'>
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)">
  </new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "notHealthy";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    newMeal.id = this.mealList.length;
    this.mealList.push(newMeal);
  }
  onChange(filterOptionByUserSelection) {
  this.filterHealthy = filterOptionByUserSelection;
  console.log(this.filterHealthy);
  }
}
