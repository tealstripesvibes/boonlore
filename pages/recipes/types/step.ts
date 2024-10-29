import { Ingredient, IngredientDetails, IngredientID } from "./ingredient";

interface StepDetails<T> extends IngredientDetails<T> {}

export interface RecipeStep<
  Ingredients extends Ingredient<T>[],
  Utensils,
  T extends string = IngredientID,
> {
  id: string;
  description: string[];
  ingredients?: Ingredients;
  utensils?: Utensils;
  details?: StepDetails<string>;
}
