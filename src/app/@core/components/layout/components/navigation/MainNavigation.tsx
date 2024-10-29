import { NavigationList } from "@core/components/layout/components/navigation/components/NavigationList";
import { intrinsicRoutes } from "@identities/routes";
import React from "react";
import "./styles/_main-nav.scss";
import {
  AppFocalPoint,
  getRouteIntentFilterSync,
  useCurrentIntent,
  useRouteSubset,
} from "@identities/routes/types/linkConfig";

export function MainNavigation() {
  const filteredRoutes = useRouteSubset(intrinsicRoutes);

  return (
    <nav id="main-nav">
      <NavigationList items={filteredRoutes} />
    </nav>
  );
}
