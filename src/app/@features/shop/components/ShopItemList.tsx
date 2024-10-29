import React, { useEffect, useState } from "react";
import {
  IShoppingCartItem,
  useAddItemToCartCallback,
} from "@features/shop/components/Snipcart";
import { ShopItem } from "@features/shop/components/ShopItem";
import { fetchProducts } from "@features/shop/components/fetchProducts";

import "./_styles/_shop-items.scss";

export function ShopItemList() {
  const options = useShoppingListItems();
  const addItemToCart = useAddItemToCartCallback(options);

  return (
    <section id="shop-items">
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <ShopItem item={option} addItemToCart={addItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function useShoppingListItems() {
  const [options, setOptions] = useState<IShoppingCartItem[]>([]);

  // Default structure for products
  const defaultProduct = {
    image: "https://placehold.co/600x400/EEE/31343C",
    maxQuantity: null,
    quantity: 1,
    features: ["Available"],
  };

  useEffect(() => {
    const call = async () => {
      try {
        const data = await fetchProducts();
        const transformedData = data.map((item) => ({
          ...defaultProduct,
          ...item,
        }));
        setOptions(transformedData);
        console.log("Fetched products:", transformedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    call();
  }, []);

  return options;
}
