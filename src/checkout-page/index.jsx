import Nav from "../components/Nav";
import Checkout from "../components/checkout";
import { useState, useEffect } from "react";
import { getActiveCustomer, getActiveOrder } from "../api/shop";

export default function App({ path }) {
  const [customer, setCustomer] = useState(null);
  const [order, setOrder] = useState(null);
  console.log("customer", customer);

  useEffect(() => {
    const fetchCustomer = async () => {
      const data = await getActiveCustomer();
      if (data.activeCustomer?.id !== customer) {
        setCustomer(data.activeCustomer);
        // localStorage.customer = JSON.stringify(data.activeCustomer);
      }
    };

    const fetchOrder = async () => {
      const data = await getActiveOrder();
      if (data.activeOrder?.id !== order?.id) {
        setOrder(data.activeOrder);
        // localStorage.order = JSON.stringify(data.activeOrder);
      }
    };
    fetchCustomer();
    fetchOrder();
  }, []);
  console.log("href", path);
  return (
    <div>
      <Nav />
      <div className="max-w-7xl my-lg mx-auto">
        <Checkout order={order} />
      </div>
    </div>
  );
}
