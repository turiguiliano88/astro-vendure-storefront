import OrderLine from "../components/cart/OrderLine";
import OrderSummary from "../components/OrderSummary";
import { Card, CardTitle, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { adjustOrderLine } from "../api/client";

export default function App({ order, customerName }) {
  //   const [customer, setCustomer] = useState({});
  const [localOrder, setLocalOrder] = useState(order);

  return (
    <div>
      <Nav
        customerName={customerName}
        totalQuantity={localOrder?.totalQuantity}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-2/3">
            <Card>
              <CardTitle>Cart</CardTitle>
              <CardContent>
                {localOrder?.lines &&
                  localOrder?.lines.map((line, index) => (
                    <OrderLine
                      key={index}
                      line={line}
                      quantities={[1, 2, 3]}
                      setOrder={setLocalOrder}
                    />
                  ))}
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-1/3 bg-neutral-200 p-sm m-sm">
            <OrderSummary order={localOrder} />
          </div>
        </div>
        {/* <div className="flex">
        <Button type="neutral">Update the cart</Button>
      </div> */}
      </div>
    </div>
  );
}
