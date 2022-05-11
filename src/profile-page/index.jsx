import Nav from "../components/Nav";
import Profile from "../components/profile";
import { useEffect, useState, useCallback } from "react";
// import { getActiveCustomer } from "../api/client";
import { getActiveOrder, getActiveCustomer } from "../api/client";

export default function App({ customer, totalQuantity }) {
  // console.log("local storage", localStorage.customer);
  //   const [customer, setCustomer] = useState(
  //     JSON.parse(localStorage.customer || "{}")
  //   );
  const [localCustomer, setCustomer] = useState(customer);
  // const [order, setOrder] = useState(null);

  return (
    <div>
      <Nav
        customerName={`${localCustomer?.firstName} ${localCustomer?.lastName}`}
        totalQuantity={totalQuantity}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <Profile customer={localCustomer} setCustomer={setCustomer} />
      </div>
    </div>
  );
}
