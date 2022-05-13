import { Card, CardContent, CardTitle } from "../ui/Card";
import Shipping from "./Shipping";
import Payment from "./Payment";
import CustomerDetail from "./CustomerDetail";
import OrderSummary from "../OrderSummary";
import Nav from "../Nav";
import { useState } from "react";

export default function App({
  order,
  eligiblePaymentMethods,
  eligibleShippingMethods,
  customer,
}) {
  const [localOrder, setOrder] = useState(order);
  return (
    <div className="">
      <Nav
        customerName={customer && `${customer?.firstName} ${customer.lastName}`}
        totalQuantity={localOrder?.totalQuantity}
      />
      <div className="max-w-5xl my-lg mx-auto">
        <Card>
          <CardTitle>Checkout</CardTitle>
          <CardContent>
            <div className="flex flex-wrap">
              <div className="mr-sm mb-sm">
                {localOrder.customer ? (
                  <>
                    {localOrder?.state === "AddingItems" && (
                      <Shipping
                        setOrder={setOrder}
                        eligibleShippingMethods={eligibleShippingMethods}
                      />
                    )}
                    {localOrder?.state === "ArrangingPayment" && (
                      <Payment
                        setOrder={setOrder}
                        eligiblePaymentMethods={eligiblePaymentMethods}
                      />
                    )}
                    {localOrder?.state === "PaymentSettled" && (
                      <div className="flex justify-center items-center p-xl">
                        <div className="">
                          <div className="text-3xl font-semibold flex flex-wrap">
                            Thank you for your order {localOrder?.code} !
                          </div>
                          <div className="text-base font-normal whitespace-pre mt-xs">
                            You will soon receive an email as the order
                            confirmation.
                            {"\n"}
                            Have a nice day!
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <CustomerDetail setOrder={setOrder} />
                )}
              </div>
              {localOrder?.state !== "PaymentSettled" && order.customer && (
                <div className="bg-neutral-200 p-lg h-fit">
                  <OrderSummary order={localOrder} />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
