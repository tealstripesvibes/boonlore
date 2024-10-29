import React, { useState } from "react";
import { IShoppingCartItem } from "@features/shop/components/Snipcart";
import classNames from "classnames";
import { Popup } from "@core/components/popup/UiPopup";

interface ShopItemParams {
  item: IShoppingCartItem & {
    features?: string[];
  };
  addItemToCart: (id: string) => Promise<void>;
}

const enabled = true;

export function ShopItem({ item, addItemToCart }: ShopItemParams) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = async (id: string) => {
    try {
      await addItemToCart(id);
    } catch (error) {
      console.error(`Error adding item ${id} to cart:`, error);
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderButton = () => {
    if (!enabled) return null;

    return (
      <button
        className="pricing__card__button"
        onClick={() => handleAddToCart(item.id)}
      >
        Add to cart
      </button>
    );
  };

  const renderViewDetailsButton = () => (
    <button className="pricing__card__view-details-button" onClick={toggleOpen}>
      {isOpen ? "Hide Details" : "View Details"}
    </button>
  );

  const description = item.description.replace(/\n/g, "\n\n");

  return (
    <div
      className={classNames("pricing__card", { "pricing__card--open": isOpen })}
      key={item.id}
    >
      <figure className="pricing__card__image">
        <img src={item.image} alt={item.name} width={100} />
        <figcaption className="pricing__card__title">{item.name}</figcaption>
      </figure>
      <p className="pricing__card__price">${item.price}</p>
      {renderViewDetailsButton()}
      {isOpen && (
        <Popup
          id={"detail-" + item.id}
          openImmediately
          title={item.name}
          Component={() => (
            <>
              <p className="pricing__card__description">{description}</p>
              {item.features && item.features.length > 0 && (
                <ul className="pricing__card__features">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        />
      )}
      {renderButton()}
    </div>
  );
}
