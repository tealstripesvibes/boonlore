import React from "react";
import { Ingredients } from "./pie/Ingredients";
import { PreparationSteps } from "./pie/PreparationSteps";
import { PieInfo } from "./pie/PieInfo";
import { Ingredient } from "../types/ingredient";
import { RecipeStep } from "../types/step";

type IngredientSet =
  | "baneberries"
  | "dark-brown-sugar"
  | "crust"
  | "arrowroot-powder"
  | "vanilla-extract"
  | "butter";
type RecipeUtensil = "oven" | "mixing-bowl";
type RecipeIngredient = Ingredient<IngredientSet>;

export function BaneberryPie() {
  const baneberries: RecipeIngredient = {
    id: "baneberries",
    name: "baneberries",
    amount: {
      unit: "cups",
      valence: 3,
    },
  };
  const darkBrownSugar: RecipeIngredient = {
    id: "dark-brown-sugar",
    name: "dark brown sugar",
    amount: {
      unit: "cup",
      valence: 1,
    },
  };
  const pieCrust: RecipeIngredient = {
    id: "crust",
    name: "pie crust",
    amount: {
      unit: "homemade or store-bought",
      valence: 1,
    },
  };
  const arrowrootPowder: RecipeIngredient = {
    id: "arrowroot-powder",
    name: "arrowroot powder",
    amount: {
      unit: "tbsp",
      valence: 3,
    },
  };
  const vanillaExtract: RecipeIngredient = {
    id: "vanilla-extract",
    name: "vanilla extract",
    amount: {
      unit: "tsp",
      valence: 1,
    },
  };
  const butter: RecipeIngredient = {
    id: "butter",
    name: "butter",
    amount: {
      unit: "tbsp",
      valence: 2,
    },
  };
  const ingredients: RecipeIngredient[] = [
    baneberries,
    darkBrownSugar,
    pieCrust,
    arrowrootPowder,
    vanillaExtract,
    butter,
  ];

  const steps: RecipeStep<RecipeIngredient[], RecipeUtensil[]>[] = [
    {
      id: "preheat",
      description: ["Preheat the oven to 400°F (200°C)."],
      utensils: ["oven"],
    },
    {
      id: "prepare-filling",
      description: [
        "In a large mixing bowl, combine baneberries, dark brown sugar, arrowroot powder, and vanilla extract.",
      ],
      utensils: ["mixing-bowl"],
      ingredients: [
        baneberries,
        darkBrownSugar,
        arrowrootPowder,
        vanillaExtract,
      ],
    },
    {
      id: "assemble-pie",
      description: [
        "Pour the mixture into the pie crust, dot with butter, and cover with the top crust.",
      ],
      ingredients: [pieCrust, butter],
    },
    {
      id: "bake-pie",
      description: [
        "Bake for 50-55 minutes, until the crust is golden brown and the filling is bubbly.",
      ],
    },
    {
      id: "let-cool",
      description: ["Let the pie cool completely before serving."],
    },
  ];

  return (
    <article id="baneberry-pie">
      <PieInfo
        name="Baneberry Pie"
        description="A bold and mysterious pie made with the powerful flavors of baneberries."
      />
      <section className="recipe">
        <Ingredients items={ingredients} />
        <PreparationSteps steps={steps} />
      </section>
    </article>
  );
}
