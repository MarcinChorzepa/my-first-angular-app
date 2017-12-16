import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showDetailFromList= new EventEmitter<Recipe>();
 recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test recipe with test image', 'https://static.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg'),
    new Recipe('A test recipe2', 'Test recipe with test image 2', 'https://static.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }


  onSelectedFromList(recipeEl: Recipe) {
    this.showDetailFromList.emit(recipeEl);
  }
}
