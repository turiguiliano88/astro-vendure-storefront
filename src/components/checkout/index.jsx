import { Card, CardContent, CardTitle } from "../ui/Card";
import Shipping from "./Shipping";
import Payment from "./Payment";
import CheckIcon from "../icon/Check";
import CustomerDetail from "./CustomerDetail";
import OrderSummary from "../OrderSummary";
// import { useState, useEffect } from "react";
// import { getActiveCustomer, getActiveOrder } from "../../api/shop";

export default function Checkout({
  order,
  setOrder,
  eligiblePaymentMethods,
  eligibleShippingMethods,
  isLoggedIn,
}) {
  return (
    <div className="">
      <Card>
        <CardTitle>Checkout</CardTitle>
        <CardContent>
          <div className="flex flex-wrap">
            {isLoggedIn ? (
              <div>
                {order?.state === "AddingItems" && (
                  <Shipping
                    setOrder={setOrder}
                    eligibleShippingMethods={eligibleShippingMethods}
                  />
                )}
                {order?.state === "ArrangingPayment" && (
                  <Payment
                    setOrder={setOrder}
                    eligiblePaymentMethods={eligiblePaymentMethods}
                  />
                )}
                {order?.state === "PaymentSettled" && (
                  <div className="flex justify-center items-center p-xl">
                    <div className="">
                      <div className="text-3xl font-semibold flex flex-wrap">
                        {/* <CheckIcon className="w-5 h-5" /> */}
                        Thank you for your order {order?.code} !
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
              </div>
            ) : (
              <CustomerDetail />
            )}
            {/* <div className="bg-neutral-200 p-lg ml-sm">
              <OrderSummary order={order} />
            </div> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
