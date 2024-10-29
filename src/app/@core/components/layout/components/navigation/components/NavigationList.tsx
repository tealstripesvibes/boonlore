import React from "react";

import { AppRoute } from "@identities/routes/types/linkConfig";
import { Link } from "@core/components/Link";

export function NavigationList({ items }: { items: AppRoute[] }) {
  if (!items.length) return null;
  return (
    <ul>
      {items
        .filter((link) => link.title)
        .map((link) => (
          <li key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
    </ul>
  );
}
