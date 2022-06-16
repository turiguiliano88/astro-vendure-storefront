import Nav from "../Nav";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { useStore } from "../store";
export default function App({ product, showSearchBox }) {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const customer = useStore((state) => state.customer);
  const orderQuantity = useStore((state) => state.orderQuantity);
  const fetchAll = useStore((state) => state.fetchAll);

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
      <Nav
        customerName={
          customer ? `${customer?.firstName} ${customer?.lastName}` : null
        }
        totalQuantity={orderQuantity}
        showMiniCart={showMiniCart}
        setShowMiniCart={setShowMiniCart}
        showSearchBox={showSearchBox}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <ProductCard product={product} setShowMiniCart={setShowMiniCart} />
      </div>
    </div>
  );
}
