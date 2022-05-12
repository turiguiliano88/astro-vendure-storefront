import Nav from "../Nav";
import ProductCard from "./ProductCard";
import { useEffect, useState, useCallback } from "react";
// import { getActiveCustomer } from "../api/client";
// import { getActiveOrder, getActiveCustomer } from "../api/client";

export default function App({ product, totalQuantity, customerName }) {
  const [showMiniCart, setShowMiniCart] = useState(false);

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
