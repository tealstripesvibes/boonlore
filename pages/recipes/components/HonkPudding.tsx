import React from "react";
import { Ingredients } from "./pie/Ingredients";
import { PreparationSteps } from "./pie/PreparationSteps";
import { PieInfo } from "./pie/PieInfo";
import { Ingredient } from "../types/ingredient";
import { RecipeStep } from "../types/step";

type IngredientSet =
  | "challah-brioche"
  | "heavy-cream"
  | "eggs"
  | "gruyere-cheese"
  | "parmesan-cheese"
  | "nutmeg"
  | "thyme"
  | "salt-and-pepper"
  | "potatoes"
  | "garlic";
type RecipeUtensil = "oven" | "mixing-bowl" | "baking-dish" | "saucepan";
type RecipeIngredient = Ingredient<IngredientSet>;

export function HonkPudding({
  variation = "bread pudding",
}: {
  variation: "bread pudding" | "savory gratin";
}) {
  const breadPuddingIngredients: RecipeIngredient[] = [
    {
      id: "challah-brioche",
      name: "Challah or brioche",
      amount: { unit: "cups", valence: 6 },
    },
    {
      id: "heavy-cream",
      name: "Heavy cream",
      amount: { unit: "cups", valence: 2 },
    },
    {
      id: "eggs",
      name: "Eggs",
      amount: { unit: "large individuals", valence: 4 },
    },
    {
      id: "gruyere-cheese",
      name: "Gruyère cheese",
      amount: { unit: "cup", valence: 0.5 },
    },
    {
      id: "parmesan-cheese",
      name: "Parmesan cheese",
      amount: { unit: "cup", valence: 0.5 },
    },
    {
      id: "nutmeg",
      name: "Nutmeg",
      amount: { unit: "tsp", valence: 0.25 },
    },
    {
      id: "thyme",
      name: "Thyme",
      amount: { unit: "tsp", valence: 1 },
    },
    {
      id: "salt-and-pepper",
      name: "Salt and pepper",
      amount: { unit: "to taste", valence: 1 },
    },
  ];

  const savoryGratinIngredients: RecipeIngredient[] = [
    {
      id: "potatoes",
      name: "Potatoes",
      amount: { unit: "large individuals", valence: 4 },
    },
    {
      id: "heavy-cream",
      name: "Heavy cream",
      amount: { unit: "cups", valence: 2 },
    },
    {
      id: "gruyere-cheese",
      name: "Gruyère cheese",
      amount: { unit: "cup", valence: 1 },
    },
    {
      id: "garlic",
      name: "Garlic",
      amount: { unit: "cloves minced", valence: 2 },
    },
    {
      id: "nutmeg",
      name: "Nutmeg",
      amount: { unit: "tsp", valence: 0.25 },
    },
    {
      id: "thyme",
      name: "Thyme",
      amount: { unit: "tsp", valence: 1 },
    },
    {
      id: "salt-and-pepper",
      name: "Salt and pepper",
      amount: { unit: "to taste", valence: 1 },
    },
  ];

  const breadPuddingSteps: RecipeStep<RecipeIngredient[], RecipeUtensil[]>[] = [
    {
      id: "preheat",
      description: ["Preheat oven to 350°F (175°C)."],
      utensils: ["oven"],
    },
    {
      id: "mix-ingredients",
      description: [
        "In a large bowl, whisk eggs, heavy cream, thyme, nutmeg, salt, and pepper.",
        "Toss the cubed bread into the egg mixture until well coated.",
        "Fold in Gruyère and Parmesan cheeses.",
      ],
      utensils: ["mixing-bowl"],
      ingredients: breadPuddingIngredients,
    },
    {
      id: "bake",
      description: [
        "Transfer to a buttered baking dish and bake for 30-40 minutes until the top is golden and the center is set.",
      ],
      utensils: ["oven", "baking-dish"],
    },
  ];

  const savoryGratinSteps: RecipeStep<RecipeIngredient[], RecipeUtensil[]>[] = [
    {
      id: "preheat",
      description: ["Preheat oven to 350°F (175°C)."],
      utensils: ["oven"],
    },
    {
      id: "layer-potatoes",
      description: ["Layer the sliced potatoes in a buttered baking dish."],
      utensils: ["baking-dish"],
      ingredients: [savoryGratinIngredients[0]],
    },
    {
      id: "heat-cream",
      description: [
        "In a saucepan, heat heavy cream with garlic, thyme, nutmeg, salt, and pepper until warmed.",
        "Pour the cream mixture over the potatoes and top with Gruyère cheese.",
      ],
      utensils: ["saucepan"],
      ingredients: savoryGratinIngredients.slice(1),
    },
    {
      id: "bake",
      description: [
        "Bake for 45 minutes to 1 hour, until the potatoes are tender and the top is golden brown.",
      ],
      utensils: ["oven", "baking-dish"],
    },
  ];

  const selectedIngredients =
    variation === "bread pudding"
      ? breadPuddingIngredients
      : savoryGratinIngredients;

  const selectedSteps =
    variation === "bread pudding" ? breadPuddingSteps : savoryGratinSteps;

  return (
    <article id="honk-pudding">
      <PieInfo
        name={
          variation === "bread pudding"
            ? "Honk Bread Pudding"
            : "Honk Savory Gratin"
        }
        description={
          variation === "bread pudding"
            ? "A grounding and rich bread pudding, perfect for adapting to different holiday moods."
            : "A luxurious savory gratin, grounding the meal with a rich and opulent feel."
        }
      />
      <section className="recipe">
        <Ingredients items={selectedIngredients} />
        <PreparationSteps steps={selectedSteps} />
      </section>
    </article>
  );
}
