// pages/recipes/by/ingredient/butternut-squash/+data.tsx

import { useConfig } from "vike-react/useConfig";
import { PageContext } from "vike/dist/esm/shared/types";
import butternut_1 from "../_recipes/images/2024-10-B/butternut-hold.webp";
import { recipes } from "../data.recipes.shared";

export async function data(pageContext: PageContext) {
  const config = useConfig();

  const hash = pageContext.routeParams.id;
  const activeRecipe = hash ? recipes[hash] : null;

  // Set default metadata values
  const defaultTitle = "Butternut Squash Recipes";
  const defaultDescription = "Explore a variety of butternut squash recipes.";
  const defaultImage = butternut_1;
  const defaultUrl = pageContext.urlOriginal;

  // Set metadata based on the active recipe
  const title = activeRecipe ? activeRecipe.name : defaultTitle;
  const description = activeRecipe?.description || defaultDescription;
  const image = activeRecipe?.image || defaultImage;
  const url = activeRecipe?.url || defaultUrl;

  config({
    Head: (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {activeRecipe && (
          <script type="application/ld+json">
            {JSON.stringify(activeRecipe)}
          </script>
        )}
      </>
    ),
  });

  return { recipes };
}
