import Nav from "../components/Nav";
import Profile from "../components/profile";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import { customerState } from "../store";
import { useEffect, useState, useCallback } from "react";
// import { getActiveCustomer } from "../api/client";
import { getActiveOrder, getActiveCustomer } from "../api/client";

export default function App({ path }) {
  // console.log("local storage", localStorage.customer);
  //   const [customer, setCustomer] = useState(
  //     JSON.parse(localStorage.customer || "{}")
  //   );
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

  return (
    <RecoilRoot>
      <Nav
        customerName={
          customer &&
          customer.firstName &&
          `${customer.firstName} ${customer.lastName}`
        }
        totalQuantity={order?.totalQuantity}
      />
      <div>
        <Profile customer={customer} setCustomer={setCustomer} path={path} />
      </div>
    </RecoilRoot>
  );
}
