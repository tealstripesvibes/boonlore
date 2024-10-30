import { AppRoute, AppRouteDict } from "@identities/routes/types/linkConfig";

const recipes: AppRouteDict = {
  "roasted-salad": {
    id: "recipe__roasted-salad",
    href: "/recipes/by/ingredient/butternut-squash/roasted-salad",
    title: "Roasted Butternut Squash Salad",
    absolutePath: "/recipes/by/ingredient/butternut-squash/roasted-salad",
    intent: ["welcome"],
    subConfigMap: {},
  },
  curry: {
    id: "recipe__curry",
    href: "/recipes/by/ingredient/butternut-squash/curry",
    title: "Butternut Squash Curry",
    absolutePath: "/recipes/by/ingredient/butternut-squash/curry",
    intent: ["welcome"],
    subConfigMap: {},
  },
  risotto: {
    id: "recipe__risotto",
    href: "/recipes/by/ingredient/butternut-squash/risotto",
    title: "Butternut Squash Risotto",
    absolutePath: "/recipes/by/ingredient/butternut-squash/risotto",
    intent: ["welcome"],
    subConfigMap: {},
  },
  tartlets: {
    id: "recipe__tartlets",
    href: "/recipes/by/ingredient/butternut-squash/tartlets",
    title: "Butternut Squash Tartlets",
    absolutePath: "/recipes/by/ingredient/butternut-squash/tartlets",
    intent: ["welcome"],
    subConfigMap: {},
  },
  "holiday-gratin": {
    id: "recipe__holiday-gratin",
    href: "/recipes/by/ingredient/butternut-squash/holiday-gratin",
    title: "Butternut Squash Holiday Gratin",
    absolutePath: "/recipes/by/ingredient/butternut-squash/holiday-gratin",
    intent: ["welcome"],
    subConfigMap: {},
  },
} as const;

export const mainRecipesRoute: AppRoute = {
  id: "scene__recipes",
  href: "/recipes",
  title: "Recipes",
  absolutePath: "/recipes",
  subConfigMap: {
    by: {
      id: "scene__recipes_by",
      href: "/recipes/by",
      title: "Recipes by Category",
      absolutePath: "/recipes/by",
      intent: ["welcome"],
      subConfigMap: {
        ingredient: {
          id: "scene__recipes_by_ingredient",
          href: "/recipes/by/ingredient",
          title: "Recipes by Ingredient",
          absolutePath: "/recipes/by/ingredient",
          intent: ["welcome"],
          subConfigMap: {
            "butternut-squash": {
              id: "scene__recipes_by_ingredient_butternut-squash",
              href: "/recipes/by/ingredient/butternut-squash",
              title: "Butternut Squash Recipes",
              absolutePath: "/recipes/by/ingredient/butternut-squash",
              intent: ["welcome"],
              subConfigMap: recipes,
            },
          },
        },
      },
    },
  },
  intent: ["welcome"],
};
