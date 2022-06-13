import Button from "../components/ui/Button";
import ElasticSearch from "./ElasticSearch";
import MiniCart from "./MiniCart";
// import { getActiveCustomer, getActiveOrder } from "../api/client";
// import { useEffect, useState } from "react";

export default function Nav({
  showMiniCart,
  setShowMiniCart,
  showSearchBox,
  customerName,
  totalQuantity,
}) {
  // const [customerName, setCustomerName] = useState("");
  // const [totalQuantity, setToltalQuantity] = useState(null);
  // useEffect(() => {
  //   async function fetchData() {
  //     const customer = (await getActiveCustomer()).getActiveCustomer;
  //     customer &&
  //       setCustomerName(`${customer.firstName} ${customer.lastName}'`);
  //     const order = (await getActiveOrder()).getActiveOrder;
  //     order && setToltalQuantity(order.totalQuantity);
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className="m-sm">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">
          <a href="/">Storefront</a>
        </span>
        {showSearchBox && (
          <div className="grow px-xs hidden md:flex max-w-md">
            <ElasticSearch />
          </div>
        )}
        <div className="flex items-center">
          {customerName ? (
            <a href="/profile" className="font-semibold">
              {customerName}
            </a>
          ) : (
            <div className="flex">
              <a href="/register">
                <Button size="small" type="transparent">
                  Register
                </Button>
              </a>
              <a href="/login">
                <Button size="small">Login</Button>
              </a>
            </div>
          )}
          <div className="relative">
            <MiniCart
              showMiniCart={showMiniCart}
              setShowMiniCart={setShowMiniCart}
              totalQuantity={totalQuantity}
            />
          </div>
        </div>
      </div>
      <div className="flex grow py-xs md:hidden">
        <ElasticSearch />
      </div>
    </div>
  );
}
