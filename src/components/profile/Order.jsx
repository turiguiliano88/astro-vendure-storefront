import { Card, CardContent, CardTitle } from "../ui/Card";
import Disclosure from "../ui/Disclosure";
import OrderLine from "../cart/OrderLine";

export default function ProfileOrder({ orders }) {
  function parseDate(input) {
    return input.slice(0, 10);
  }
  return (
    <Card>
      <CardTitle>Order</CardTitle>
      <CardContent>
        <div>
          {orders.map((order, index) => (
            <Disclosure
              key={index}
              title={
                <div className="mb-xs p-sm border-2 border-neutral-200 cursor-pointer hover:bg-neutral-200">
                  <div className="text-lg font-medium">
                    Order code: {order.code}
                  </div>
                  <div className="flex justify-between mt-xs text-neutral-600">
                    <span>Items: {order.totalQuantity}</span>
                    <span>Ordered at: {parseDate(order.createdAt)}</span>
                  </div>
                </div>
              }
              content={
                <div className="p-xs md:p-sm">
                  {order.lines.map((line, index) => (
                    <div className="" key={index}>
                      <OrderLine key={index} line={line} />
                    </div>
                  ))}
                  <hr className="my-sm text-neutral-200" />
                  <div className="flex justify-between p-xs font-medium">
                    <span>Shipping: </span>
                    <span>€{order.shipping}</span>
                  </div>
                  <div className="flex justify-between p-xs font-medium">
                    <span>Total: </span>
                    <span>€{order.total}</span>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
