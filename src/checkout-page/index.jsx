import Nav from "../components/Nav";
import Checkout from "../components/checkout";
import { useState, useEffect } from "react";
import { getActiveCustomer, getActiveOrder } from "../api/client";

export default function App({ order, customerName }) {
  const [localOrder, setOrder] = useState(order);

  return (
    <div>
      <Nav customerName={customerName} totalQuantity={order?.totalQuantity} />
      <div className="max-w-7xl my-lg mx-auto">
        <Checkout order={localOrder} />
      </div>
    </div>
  );
}
