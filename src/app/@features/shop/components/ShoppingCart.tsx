import { useSnipcartCartCount } from "@features/shop/components/Snipcart";
import React from "react";
import { useShopContext } from "@features/shop/components/ShopProvider";

function CheckoutButton() {
  return (
    <button id="checkout" onClick={() => window.Snipcart.api.theme.cart.open()}>
      Checkout
    </button>
  );
}

function EmptyCartButton() {
  const { items, updateKey } = useShopContext();
  return (
    <button
      id="empty-cart"
      onClick={() => {
        items.forEach((item) => {
          window.Snipcart.api.cart.items.remove(item.uniqueId);
        });
        setTimeout(() => {
          updateKey();
        }, 500);
      }}
    >
      Empty Cart
    </button>
  );
}

export function ShoppingCart() {
  const actualCount = useSnipcartCartCount();
  const key = useShopContext().key;
  if (!actualCount) return null;
  return (
    <section id="cart" data-key={key}>
      <div className="qty">{actualCount} items in cart</div>
      <div className="button-container">
        <CheckoutButton />
        <EmptyCartButton />
      </div>
    </section>
  );
}
