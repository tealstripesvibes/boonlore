import React from "react";
import "@features/shop/styles/_shop.scss";
import { ShopItemList } from "@features/shop/components/ShopItemList";
import { ShoppingCart } from "@features/shop/components/ShoppingCart";
import { initShoppingExperience } from "@features/shop/initShoppingExperience";
import { ShopProvider } from "@features/shop/components/ShopProvider";

initShoppingExperience();

export function Shop() {
  return (
    <ShopProvider>
      <article id="shop">
        <ShoppingCart />
        <ShopItemList />
      </article>
    </ShopProvider>
  );
}
