import React from "react";
import { Ingredients } from "./pie/Ingredients";
import { PreparationSteps } from "./pie/PreparationSteps";
import { PieInfo } from "./pie/PieInfo";
import { Ingredient } from "../types/ingredient";
import { RecipeStep } from "../types/step";

type IngredientSet =
  | "almond-flour"
  | "butter"
  | "thyme"
  | "lemon-zest"
  | "goat-cheese"
  | "honey"
  | "black-pepper"
  | "salt";
type RecipeUtensil = "oven" | "tartlet-molds" | "mixing-bowl";
type RecipeIngredient = Ingredient<IngredientSet>;

export function BonkTartlets() {
  const almondFlour: RecipeIngredient = {
    id: "almond-flour",
    name: "almond flour",
    amount: {
      unit: "cup",
      valence: 1,
    },
  };
  const butter: RecipeIngredient = {
    id: "butter",
    name: "butter",
    amount: {
      unit: "cup",
      valence: 0.25,
    },
  };
  const thyme: RecipeIngredient = {
    id: "thyme",
    name: "fresh thyme",
    amount: {
      unit: "tsp",
      valence: 1,
    },
  };
  const lemonZest: RecipeIngredient = {
    id: "lemon-zest",
    name: "lemon zest",
    amount: {
      unit: "tbsp",
      valence: 1,
    },
  };
  const goatCheese: RecipeIngredient = {
    id: "goat-cheese",
    name: "goat cheese",
    amount: {
      unit: "oz",
      valence: 4,
    },
  };
  const honey: RecipeIngredient = {
    id: "honey",
    name: "honey",
    amount: {
      unit: "tbsp",
      valence: 1,
    },
  };
  const blackPepper: RecipeIngredient = {
    id: "black-pepper",
    name: "cracked black pepper",
    amount: {
      unit: "tsp",
      valence: 0.5,
    },
  };
  const salt: RecipeIngredient = {
    id: "salt",
    name: "salt",
    amount: {
      unit: "to taste",
      valence: 1,
    },
  };

  const ingredients: RecipeIngredient[] = [
    almondFlour,
    butter,
    thyme,
    lemonZest,
    goatCheese,
    honey,
    blackPepper,
    salt,
  ];

  const steps: RecipeStep<RecipeIngredient[], RecipeUtensil[]>[] = [
    {
      id: "preheat",
      description: ["Preheat oven to 350°F (175°C)."],
      utensils: ["oven"],
    },
    {
      id: "make-dough",
      description: [
        "Mix almond flour and butter to form a tartlet dough. Press the dough into small tartlet molds.",
      ],
      utensils: ["mixing-bowl", "tartlet-molds"],
      ingredients: [almondFlour, butter],
    },
    {
      id: "bake-tartlets",
      description: ["Bake for 10-12 minutes or until golden brown."],
      utensils: ["oven"],
    },
    {
      id: "make-filling",
      description: [
        "In a bowl, mix goat cheese, honey, lemon zest, thyme, salt, and black pepper.",
      ],
      utensils: ["mixing-bowl"],
      ingredients: [goatCheese, honey, lemonZest, thyme, salt, blackPepper],
    },
    {
      id: "assemble-tartlets",
      description: [
        "Once the tartlet shells are cool, fill with the goat cheese mixture and garnish with a sprig of thyme and a dash of citrus zest.",
      ],
    },
    {
      id: "serve",
      description: [
        "Serve as a final course, bringing a notable citrusy and earthy finish to the meal.",
      ],
    },
  ];

  return (
    <article id="bonk-tartlets">
      <PieInfo
        name="Citrus and Herb-Infused Earthy Tartlets"
        description="A notable and pungent citrus-earth tartlet, perfect for the end of the meal. Picky eaters may avoid the strong flavors, but foodies will appreciate its boldness."
      />
      <section className="recipe">
        <Ingredients items={ingredients} />
        <PreparationSteps steps={steps} />
      </section>
    </article>
  );
}
