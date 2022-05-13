import Nav from "../Nav";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function App({
  product,
  totalQuantity,
  customerName,
  showSearchBox,
}) {
  const [showMiniCart, setShowMiniCart] = useState(false);

  const [orderQuantity, setOrderQuantity] = useState(totalQuantity);
  return (
    <div>
      <Nav
        customerName={customerName}
        totalQuantity={orderQuantity}
        showMiniCart={showMiniCart}
        setShowMiniCart={setShowMiniCart}
        showSearchBox={showSearchBox}
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
