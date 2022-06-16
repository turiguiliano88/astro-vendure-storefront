import OrderLine from "./OrderLine";
import OrderSummary from "../OrderSummary";
import { Card, CardTitle, CardContent } from "../ui/Card";
import Nav from "../Nav";
import { useEffect } from "react";
import { useStore } from "../store";

export default function App({ showSearchBox }) {
  const customer = useStore((state) => state.customer);
  const order = useStore((state) => state.order);
  const fetchAll = useStore((state) => state.fetchAll);
  const setOrder = useStore((state) => state.setOrder);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <div>
      <Nav
        customerName={
          customer ? `${customer.firstName} ${customer.lastName}` : null
        }
        totalQuantity={order?.totalQuantity}
        showSearchBox={showSearchBox}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-2/3">
            <Card>
              <CardTitle>Cart</CardTitle>
              <CardContent>
                {order?.lines &&
                  order?.lines.map((line, index) => (
                    <OrderLine
                      key={index}
                      line={line}
                      quantities={[1, 2, 3]}
                      setOrder={setOrder}
                    />
                  ))}
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-1/3 bg-neutral-200 p-sm m-sm">
            <OrderSummary order={order} showCheckoutButton={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
