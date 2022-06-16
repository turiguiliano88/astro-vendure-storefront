import { Card, CardTitle, CardContent } from "./ui/Card";
import Button from "./ui/Button";

export default function OrderSummary({ order, showCheckoutButton }) {
  return (
    <div className="h-fit">
      <Card>
        <CardTitle>Order Summary</CardTitle>
        <CardContent>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>€{order && (order?.subTotal / 100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>€{order && (order?.shipping / 100).toFixed(2)}</span>
          </div>
          <hr className="my-sm border-2 border-neutral-600" />
          <div className="flex justify-between mb-sm">
            <span>Total</span>
            <span>€{order && (order?.total / 100).toFixed(2)}</span>
          </div>
          {showCheckoutButton && (
            <a href="/checkout">
              <Button>Checkout</Button>
            </a>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
