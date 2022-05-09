import OrderLine from "./OrderLine";
import OrderSummary from "../OrderSummary";
import { Card, CardTitle, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import { getActiveOrder, getActiveCustomer } from "../../api/shop";

export default function Cart() {
  const [customer, setCustomer] = useState({});
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
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-2/3">
            <Card>
              <CardTitle>Cart</CardTitle>
              <CardContent>
                {order.lines &&
                  order.lines.map((line, index) => (
                    <OrderLine key={index} line={line} />
                  ))}
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-1/3 bg-neutral-200 p-sm m-sm">
            <OrderSummary order={order} />
          </div>
        </div>
        {/* <div className="flex">
        <Button type="neutral">Update the cart</Button>
      </div> */}
      </div>
    </div>
  );
}
