import OrderLine from "./OrderLine";
import OrderSummary from "../OrderSummary";
import { Card, CardTitle, CardContent } from "../ui/Card";
import Nav from "../Nav";
import { useState } from "react";

export default function App({ order, customerName, showSearchBox }) {
  const [localOrder, setLocalOrder] = useState(order);

  return (
    <div>
      <Nav
        customerName={customerName}
        totalQuantity={localOrder?.totalQuantity}
        showSearchBox={showSearchBox}
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
            <OrderSummary order={localOrder} showCheckoutButton={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
