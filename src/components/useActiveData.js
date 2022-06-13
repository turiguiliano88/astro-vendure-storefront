import { useState, useEffect } from "react";
import { getActiveCustomer, getActiveOrder } from "../api/client";

export default function useActiveData() {
  const [customer, setCustomer] = useState(null);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const customer = (await getActiveCustomer()).activeCustomer;
      customer && setCustomer(customer);
      const order = (await getActiveOrder()).activeOrder;
      order && setOrder(order);
    };
    fetchData();
  }, []);
  // getActiveCustomer().then((res) => {
  //   const customer = res.activeCustomer;
  //   if (customer) {
  //     setCustomer(`${customer.firstName} ${customer.lastName}'`);
  //   }
  // });

  return [customer, order];
}
