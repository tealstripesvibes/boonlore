import React from "react";

export function PieInfo({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{description}</p>
    </section>
  );
}
