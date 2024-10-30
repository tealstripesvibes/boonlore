// pages/recipes/components/pie/Ingredients.tsx

import React from "react";

// Define the HowToIngredient interface matching Schema.org
interface HowToIngredient {
  "@type": "HowToIngredient";
  name: string;
  requiredQuantity?: string;
}

export function Ingredients({ items }: { items: HowToIngredient[] }) {
  return (
    <section className="ingredients">
      <h3>Ingredients</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span className="amount">{item.requiredQuantity}</span>
            &nbsp; of <span className="ingredient">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
