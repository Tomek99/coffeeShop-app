import React, { useContext } from "react";
import { Context } from "../../Contexts/Context";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import ItemSummary from "./ItemSummary/ItemSummary";
import { FaRegUser } from "react-icons/fa";
import { BsBuildings, BsTruck } from "react-icons/bs";
import { TfiComment } from "react-icons/tfi";
import styles from "./Summary.module.scss";
import input_payment_data from "../../data/input_payment_data.json";
import CartItem from "./CartItem/CartItem";
import HeadingThree from "../HeadingThree/HeadingThree";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

function Summary() {
  const { order } = useContext(Context);
  const findUrl = input_payment_data.find(
    (item) => item.value === order.payment
  );

  return (
    <div className={styles.Summary}>
      <div className={styles.gridTemplate}>
        <div className={styles.divLeft}>
          <HeaderInfo title="Summary" />
          <ItemSummary title="Delivery">
            <div className={styles.divFlexRow}>
              <BsTruck size={25} />
              <p className={styles.text}>{order.delivery}</p>
            </div>
          </ItemSummary>
          <ItemSummary title="You are purchasing as">
            <div className={styles.divFlexRow}>
              {order.shopper === "Company" ? (
                <BsBuildings size={25} />
              ) : (
                <FaRegUser size={25} />
              )}
              <p className={styles.text}>{order.shopper}</p>
            </div>
          </ItemSummary>

          {order.activeCompany ? (
            <ItemSummary title="Company details for invoice">
              <div>
                <p>{order.company.companyName}</p>
                <p>{order.company.companyStreet}</p>
                <p>
                  {order.company.companyZIPcode} {order.company.companyCity}
                </p>
                <p>{order.company.companyNip}</p>
              </div>
            </ItemSummary>
          ) : null}
          {order.activeAddress ? (
            <ItemSummary title="Delivery address">
              <div className={styles.divAddress}>
                <p className={styles.firstParagraph}>{order.address.name}</p>
                <p>
                  {order.address.street} {order.address.house}
                </p>
                <p>
                  {order.address.ZIP_code} {order.address.city}
                </p>
                <p>{order.address.number}</p>
                <p>{order.address.email}</p>
              </div>
            </ItemSummary>
          ) : (
            <ItemSummary title="Recipient">
              <div>
                <p>{order.address.name}</p>
                <p>{order.address.number}</p>
                <p>{order.address.email}</p>
              </div>
            </ItemSummary>
          )}

          <ItemSummary title="Payment">
            <div className={styles.divFlexRow}>
              <img
                src={findUrl.url}
                alt={findUrl.name}
                style={{ width: "40px" }}
              />
              <p>{order.payment}</p>
            </div>
          </ItemSummary>
          {order.activeInvoice ? (
            <ItemSummary title="Invoice details">
              <div>
                <p>{order.invoice.name}</p>
                <p>{order.invoice.street}</p>
                <p>
                  {order.invoice.ZIP_code} {order.invoice.city}
                </p>
              </div>
            </ItemSummary>
          ) : null}

          <div>
            <HeadingThree title="Cart" />
            <div className={styles.cartItems}>
              {order.products.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </div>
          </div>

          <ItemSummary title="Comment to order">
            <div className={styles.divFlexRow}>
              <span>
                <TfiComment size={25} />
              </span>
              {order.activeComment ? (
                <p>{order.comment}</p>
              ) : (
                <p>No comments</p>
              )}
            </div>
          </ItemSummary>
        </div>
        <div className={styles.divRight}>
          <CheckoutSummary
            deliveryFee={order.deliveryFee}
            paymentFee={order.paymentFee}
            save={order.save}
            cartValue={order.cartValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;
