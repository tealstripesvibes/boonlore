import React, { useCallback, useMemo } from "react";
import { IShoppingCartItem } from "@features/shop/components/Snipcart";

export interface ISnipcartItem extends IShoppingCartItem {
  uniqueId: string;
  token: string;
  id: string;
  name: string;
  price: number;
  description: string;
  hasTaxesIncluded: boolean;
  categories: [];
  url: string;
  fileGuid: null;
  image: string;
  quantity: number;
  quantityStep: number;
  minQuantity: null;
  maxQuantity: null;
  stackable: string;
  shippable: boolean;
  taxable: boolean;
  taxes: [];
  customFields: [];
  duplicatable: boolean;
  downloadLink: string;
  metadata: null;
  alternatePrices: {};
  unitPrice: number;
  totalPrice: number;
  totalPriceWithoutTaxes: number;
  totalPriceWithoutDiscountsAndTaxes: number;
  totalPriceWithoutDiscountsAndTaxesLegacy: number;
  addedOn: number;
  initialData: string;
  modificationDate: number;
  pausingAction: string;
  cancellationAction: string;
  isRecurring: boolean;
  isRecurringV2: boolean;
  isRecurringV3: boolean;
  availablePlans: [];
  selectedPlanId: string;
  paymentGatewayId: string;
  state: {
    committing: boolean;
  };
}

const ShopContext = React.createContext({
  key: 0,
  cartCount: 0,
  items: [] as ISnipcartItem[],
  updateKey() {
    this.key += 1;
  },
});

export const useShopContext = () => React.useContext(ShopContext);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [key, setKey] = React.useState(0);
  const updateKey = useCallback(() => {
    setKey((prev) => prev + 1);
  }, [setKey]);

  const cartCount = useMemo(
    () => window.Snipcart?.store.getState().cart.items.count || 0,
    [key],
  );

  const items = useMemo<ISnipcartItem[]>(() => {
    const items = window.Snipcart?.store.getState().cart.items;
    if (!items) return [];
    return [...items.items];
  }, [key]);

  return (
    <ShopContext.Provider value={{ key, updateKey, cartCount, items }}>
      {children}
    </ShopContext.Provider>
  );
}
