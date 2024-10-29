import { useCallback, useEffect } from "react";
import { useShopContext } from "@features/shop/components/ShopProvider";

export type IShoppingCartItem = {
  image: string | undefined;
  id: string;
  url: string;
  description: string;
  price: number;
  name: string;
  maxQuantity?: number | null;
  quantity?: number;
  unitPrice?: number;
};

export function useAddItemToCartCallback(options: IShoppingCartItem[]) {
  const shopContext = useShopContext();
  return useCallback(
    async (id: string) => {
      try {
        const out = await window.Snipcart.api.cart.items.add({
          quantity: 1,
          maxQuantity: 1,
          ...options.find((item) => item.id === id),
        });
        shopContext.updateKey();
      } catch (e) {
        console.error(e);
      }
    },
    [options],
  );
}

export function useSnipcartCartCount() {
  const shopContext = useShopContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      shopContext.updateKey();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    const Snipcart = window.Snipcart;
    if (!Snipcart) {
      return;
    }
    if (Snipcart.store.getState().cart.items.items.length > 0) {
      var items = Snipcart.store.getState().cart.items.items;
      items.forEach(function (item: IShoppingCartItem) {
        console.log(item);
      });
    } else {
      console.log("Your cart is empty.");
    }
  }, [shopContext.key]);
  return shopContext.cartCount;
}
