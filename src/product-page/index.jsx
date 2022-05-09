import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import { useEffect, useState, useCallback } from "react";
// import { getActiveCustomer } from "../api/client";
import { getActiveOrder, getActiveCustomer } from "../api/shop";

export default function App({ product }) {
  const [customer, setCustomer] = useState(
    JSON.parse(localStorage.customer || "{}")
  );
  const [order, setOrder] = useState({});
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
  return (
    <div>
      <Nav
        customerName={
          customer &&
          customer.firstName &&
          `${customer.firstName} ${customer.lastName}`
        }
        totalQuantity={order.totalQuantity}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <ProductCard product={product} setOrder={setOrder} />
      </div>
    </div>
  );
}
