import React from "react";
import "./PopupBasket.scss";
import BasketList from "./BasketList/BasketList";

function PopupBasket(props) {
  const { isBasketOpen, basketPrice, basketItems, deleteItem } = props;

  return (
    <div className={isBasketOpen ? "PopupBasket active" : "PopupBasket"}>
      {basketPrice.currentPrice !== 0 ? (
        <div className="products">
          {basketItems.map((item) => (
            <BasketList
              id={item.idProduct}
              name={item.name}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              imageUrl={item.imageUrl}
              deleteItem={deleteItem}
              quantity={item.quantity}
            />
          ))}
        </div>
      ) : (
        <div
          className="products"
          style={{ fontSize: "2rem", textTransform: "none" }}
        >
          Your basket is empty
        </div>
      )}
      <button type="button" className="btn-buyProducts">
        Checkout now
      </button>
      <div className="summary-price">
        <div className="s-p-save">
          <span>Save: </span>
          <span className=".price">{basketPrice.save}$</span>
        </div>
        <div className="s-p-total-cost">
          <span>Total cost: </span>
          <span className=".price">{basketPrice.currentPrice}$</span>
        </div>
      </div>
    </div>
  );
}

export default PopupBasket;
