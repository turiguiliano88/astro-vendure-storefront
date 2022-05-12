import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import { useEffect, useState, useCallback } from "react";
// import { getActiveCustomer } from "../api/client";
// import { getActiveOrder, getActiveCustomer } from "../api/client";

export default function App({ product, totalQuantity, customerName }) {
  const [showMiniCart, setShowMiniCart] = useState(false);
  // const [customer, setCustomer] = useState(
  //   JSON.parse(localStorage.customer || "{}")
  // );
  // const [order, setOrder] = useState({});
  // console.log("customer", customer);

  // useEffect(() => {
  //   const fetchCustomer = async () => {
  //     const data = await getActiveCustomer();
  //     if (data.activeCustomer?.id !== customer) {
  //       setCustomer(data.activeCustomer);
  //       // localStorage.customer = JSON.stringify(data.activeCustomer);
  //     }
  //   };

  //   const fetchOrder = async () => {
  //     const data = await getActiveOrder();
  //     if (data.activeOrder?.id !== order?.id) {
  //       setOrder(data.activeOrder);
  //       // localStorage.order = JSON.stringify(data.activeOrder);
  //     }
  //   };
  //   fetchCustomer();
  //   fetchOrder();
  // }, []);
  const [orderQuantity, setOrderQuantity] = useState(totalQuantity);
  return (
    <div>
      <Nav
        customerName={customerName}
        totalQuantity={orderQuantity}
        showMiniCart={showMiniCart}
        setShowMiniCart={setShowMiniCart}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <ProductCard
          product={product}
          setOrderQuantity={setOrderQuantity}
          setShowMiniCart={setShowMiniCart}
        />
      </div>
    </div>
  );
}
