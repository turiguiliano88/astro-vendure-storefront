import Nav from "../components/Nav";
import Checkout from "../components/checkout";
import { useState, useEffect } from "react";
import { getActiveCustomer, getActiveOrder } from "../api/client";

export default function App({
  order,
  customerName,
  eligiblePaymentMethods,
  eligibleShippingMethods,
}) {
  const [localOrder, setOrder] = useState(order);

  return (
    <div>
      <Nav customerName={customerName} totalQuantity={order?.totalQuantity} />
      <div className="max-w-5xl my-lg mx-auto">
        <Checkout
          order={localOrder}
          setOrder={setOrder}
          eligiblePaymentMethods={eligiblePaymentMethods}
          eligibleShippingMethods={eligibleShippingMethods}
          isLoggedIn={customerName ? true : false}
        />
      </div>
    </div>
  );
}
