import { useState } from "react";

const useUserOrderHook = (user, cartSave, cartValue, cartItems) => {
  const [order, setOrder] = useState(() => {
    const storedValue = localStorage.getItem("order");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return {};
  });

  function addOrder(order) {
    const address = {
      name: order.name,
      street: order.street,
      house: order.house,
      ZIP_code: order.ZIP_code,
      city: order.city,
      number: order.number,
      email: order.email,
    };

    const company = {
      companyNip: order.companyNip,
      companyName: order.companyName,
      companyStreet: order.companyStreet,
      companyZIPcode: order.companyZIPcode,
      companyCity: order.companyCity,
    };

    let invoice = {
      name: order.i_name,
      street: order.i_street,
      ZIP_code: order.i_ZIP_code,
      city: order.i_city,
    };
    if (order.i_name) {
      invoice = {
        name: order.i_name,
        street: order.i_street,
        ZIP_code: order.i_ZIP_code,
        city: order.i_city,
      };
    } else {
      invoice = {
        name: order.name,
        street: order.street,
        ZIP_code: order.ZIP_code,
        city: order.city,
      };
    }
    const orderUpdate = {
      userId: user._id,
      userName: user.firstName,
      save: cartSave,
      cartValue: cartValue,
      totalCost:
        cartValue +
        JSON.parse(order.deliveryFee) +
        JSON.parse(order.paymentFee),
      supplyPrice: 15,
      products: cartItems,
      address: address,
      company: company,
      invoice: invoice,
      payment: order.payment,
      paymentFee: order.paymentFee,
      delivery: order.delivery,
      deliveryFee: order.deliveryFee,
      shopper: order.shopper,
      comment: order.comment,
      activeAddress: order.activeAddress,
      activeCompany: order.activeCompany,
      activeInvoice: order.activeInvoice,
      activeComment: order.activeComment,
    };

    setOrder(orderUpdate);
    localStorage.setItem("order", JSON.stringify(orderUpdate));
  }
  return { addOrder, order };
};

export default useUserOrderHook;
