import { recipes } from "../data.recipes.shared";

export { onBeforePrerenderStart };

async function onBeforePrerenderStart() {
  return Object.entries(recipes).map(([key, value]) => {
    return "/recipes/by/ingredient/butternut-squash/" + key;
  });
}
