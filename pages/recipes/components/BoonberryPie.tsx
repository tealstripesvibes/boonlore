import React from "react";
import { Ingredients } from "./pie/Ingredients";
import { PreparationSteps } from "./pie/PreparationSteps";
import { PieInfo } from "./pie/PieInfo";
import { Ingredient } from "../types/ingredient";
import { RecipeStep } from "../types/step";

type IngredientSet =
  | "berries"
  | "sugar"
  | "crust"
  | "cornstarch"
  | "butter"
  | "lemon-juice";
type RecipeUtensil = "oven" | "saucepan";
type RecipeIngredient = Ingredient<IngredientSet>;

export function BoonberryPie() {
  const berries: RecipeIngredient = {
    id: "berries",
    name: "boonberries",
    amount: {
      unit: "cups",
      valence: 2,
    },
  };
  const sugar: RecipeIngredient = {
    id: "sugar",
    name: "sugar",
    amount: {
      unit: "cup",
      valence: 1,
    },
  };
  const pieCrust: RecipeIngredient = {
    id: "crust",
    name: "pie crust",
    amount: {
      unit: "pre-made",
      valence: 1,
    },
  };
  const cornstarch: RecipeIngredient = {
    id: "cornstarch",
    name: "cornstarch",
    amount: {
      unit: "tbsp",
      valence: 2,
    },
  };
  const butter: RecipeIngredient = {
    id: "butter",
    name: "butter",
    amount: {
      unit: "tbsp",
      valence: 1,
    },
  };
  const lemonJuice: RecipeIngredient = {
    id: "lemon-juice",
    name: "lemon juice",
    amount: {
      unit: "tbsp",
      valence: 2,
    },
  };
  const ingredients: RecipeIngredient[] = [
    berries,
    sugar,
    pieCrust,
    cornstarch,
    butter,
    lemonJuice,
  ];
  const steps: RecipeStep<RecipeIngredient[], RecipeUtensil[]>[] = [
    {
      id: "preheat",
      description: ["Preheat the oven to 375°F (190°C)"],
      utensils: ["oven"],
    },
    {
      id: "prepare-filling",
      description: [
        "In a saucepan, combine boonberries, sugar, cornstarch, and lemon juice.",
        "Cook over medium heat until the mixture thickens.",
      ],
      utensils: ["saucepan"],
      ingredients: [berries, sugar, cornstarch, lemonJuice],
    },
    {
      id: "assemble-pie",
      description: [
        "Place the mixture into the pie crust,",
        "dot the filling with butter,",
        "then seal the pie with its top crust.",
      ],
      ingredients: [pieCrust],
    },
    {
      id: "bake-pie",
      description: [
        "Bake for 45-50 minutes, or until the crust is golden brown.",
      ],
    },
    {
      id: "let-cool",
      description: ["Let the pie cool before serving."],
    },
  ];

  return (
    <article id="boonberry-pie">
      <PieInfo
        name="Boonberry Pie"
        description="A delicious pie made from the finest boonberries."
      />
      <section className="recipe">
        <Ingredients items={ingredients} />
        <PreparationSteps steps={steps} />
      </section>
    </article>
  );
}
