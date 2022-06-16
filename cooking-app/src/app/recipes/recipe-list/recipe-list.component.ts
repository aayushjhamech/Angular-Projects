import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('Paratha', 'A flour based dish', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Alooparatha.jpg'),
    new Recipe('Paneer Masala', 'A dish made of paneer and Indian spices', 'https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Masala-1-3.jpg')
  ];

  @Output() recipeWasSelected= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
