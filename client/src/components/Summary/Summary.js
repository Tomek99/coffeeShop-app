import React, { useContext } from "react";
import { Context } from "../../Contexts/Context";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import ItemSummary from "./ItemSummary/ItemSummary";
import { FaRegUser } from "react-icons/fa";
import { BsBuildings, BsTruck, BsShop } from "react-icons/bs";
import { TfiComment } from "react-icons/tfi";
import { GiLockers } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import styles from "./Summary.module.scss";

function Summary() {
  const { order } = useContext(Context);

  const icons = [
    <BsTruck size={25} />,
    <BsShop size={25} />,
    <GiLockers size={25} />,
    <SlLocationPin size={25} />,
  ];

  return (
    <div className={styles.Summary}>
      <div className={styles.gridTemplate}>
        <HeaderInfo title="Summary" />
        <div className={styles.divLeft}>
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
            <div>
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

          <ItemSummary title="Cart">
            <div>
              {order.products.map((item, index) => (
                <p>{item.name}</p>
              ))}
            </div>
          </ItemSummary>

          <ItemSummary title="Comment to order">
            <div className={styles.divFlexRow}>
              <TfiComment size={25} />
              {order.activeComment ? (
                <p>{order.comment}</p>
              ) : (
                <p>No comments</p>
              )}
            </div>
          </ItemSummary>
        </div>
      </div>
    </div>
  );
}

export default Summary;
