import React from "react";
import { Ingredients } from "./pie/Ingredients";
import { PreparationSteps } from "./pie/PreparationSteps";
import { PieInfo } from "./pie/PieInfo";
import { Ingredient } from "../types/ingredient";
import { RecipeStep } from "../types/step";

type IngredientSet =
  | "bone-marrow"
  | "beef-broth"
  | "carrots"
  | "celery"
  | "onion"
  | "garlic"
  | "thyme"
  | "flour"
  | "butter"
  | "pie-crust"
  | "salt-and-pepper";
type RecipeUtensil = "oven" | "large-pot" | "whisk";
type RecipeIngredient = Ingredient<IngredientSet>;

export function BoneMarrowPotPie() {
  const boneMarrow: RecipeIngredient = {
    id: "bone-marrow",
    name: "bone marrow",
    amount: {
      unit: "large bones",
      valence: 4,
    },
  };
  const beefBroth: RecipeIngredient = {
    id: "beef-broth",
    name: "beef broth",
    amount: {
      unit: "cups",
      valence: 2,
    },
  };
  const carrots: RecipeIngredient = {
    id: "carrots",
    name: "carrots",
    amount: {
      unit: "diced",
      valence: 2,
    },
  };
  const celery: RecipeIngredient = {
    id: "celery",
    name: "celery",
    amount: {
      unit: "stalks diced",
      valence: 2,
    },
  };
  const onion: RecipeIngredient = {
    id: "onion",
    name: "onion",
    amount: {
      unit: "diced",
      valence: 1,
    },
  };
  const garlic: RecipeIngredient = {
    id: "garlic",
    name: "garlic",
    amount: {
      unit: "cloves minced",
      valence: 2,
    },
  };
  const thyme: RecipeIngredient = {
    id: "thyme",
    name: "thyme",
    amount: {
      unit: "tsp",
      valence: 1,
    },
  };
  const flour: RecipeIngredient = {
    id: "flour",
    name: "flour",
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
      valence: 2,
    },
  };
  const pieCrust: RecipeIngredient = {
    id: "pie-crust",
    name: "pie crust",
    amount: {
      unit: "pre-made or homemade",
      valence: 1,
    },
  };
  const saltAndPepper: RecipeIngredient = {
    id: "salt-and-pepper",
    name: "salt and pepper",
    amount: {
      unit: "to taste",
      valence: 1,
    },
  };

  const ingredients: RecipeIngredient[] = [
    boneMarrow,
    beefBroth,
    carrots,
    celery,
    onion,
    garlic,
    thyme,
    flour,
    butter,
    pieCrust,
    saltAndPepper,
  ];

  const steps: RecipeStep<RecipeIngredient[], RecipeUtensil[]>[] = [
    {
      id: "preheat",
      description: ["Preheat oven to 375°F (190°C)."],
      utensils: ["oven"],
    },
    {
      id: "sauté-vegetables",
      description: [
        "In a large pot, melt butter over medium heat and sauté onions, garlic, carrots, and celery until tender.",
      ],
      utensils: ["large-pot"],
      ingredients: [butter, onion, garlic, carrots, celery],
    },
    {
      id: "make-roux",
      description: [
        "Add flour to the vegetables and stir to form a roux, cooking for about 2 minutes.",
      ],
      utensils: ["large-pot"],
      ingredients: [flour],
    },
    {
      id: "add-broth",
      description: ["Slowly whisk in the beef broth and bring to a simmer."],
      utensils: ["whisk", "large-pot"],
      ingredients: [beefBroth],
    },
    {
      id: "add-marrow",
      description: [
        "Once simmering, add roasted bone marrow from the bones and stir in thyme, salt, and pepper. Cook for 10 minutes to thicken.",
      ],
      utensils: ["large-pot"],
      ingredients: [boneMarrow, thyme, saltAndPepper],
    },
    {
      id: "assemble-pie",
      description: [
        "Pour the mixture into a pie dish, cover with the pie crust, and bake for 30-35 minutes until the crust is golden.",
      ],
      utensils: ["oven"],
      ingredients: [pieCrust],
    },
    {
      id: "let-cool",
      description: ["Let cool slightly before serving."],
    },
  ];

  return (
    <article id="bone-marrow-pot-pie">
      <PieInfo
        name="Bone Marrow Pot Pie"
        description="A rich and savory pot pie filled with roasted bone marrow, vegetables, and herbs for a deeply satisfying dish."
      />
      <section className="recipe">
        <Ingredients items={ingredients} />
        <PreparationSteps steps={steps} />
      </section>
    </article>
  );
}
