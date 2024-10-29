import React from "react";
import { Ingredient } from "../../types/ingredient";

export function Ingredients({ items }: { items: Ingredient<any>[] }) {
  return (
    <section className="ingredients">
      <h3>Ingredients</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span className="amount">
              <span className="valence">{item.amount.valence}</span>
              &nbsp;
              <span className="unit">{item.amount.unit}</span>
            </span>
            &nbsp; of <span className="ingredient">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
