import { Helmet } from "react-helmet-async";
export { Page };

import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { lazy, Suspense } from "react";
import "./_styles/_shop.scss";

const ShoppingHub = lazy(() =>
  import("@features/shop/components/Shop").then((module) => ({
    default: module.Shop,
  })),
);

function Page() {
  return (
    <main id="page__shop">
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Shop</h1>
        <ul>
          <li>Skill Courses</li>
          <li>Web Services</li>
        </ul>
        <Suspense fallback={""}>
          <ShoppingHub />
        </Suspense>
      </article>
    </main>
  );
}