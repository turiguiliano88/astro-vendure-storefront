import { Card, CardContent, CardTitle } from "../ui/Card";
import Shipping from "./Shipping";
import Payment from "./Payment";
import CustomerDetail from "./CustomerDetail";
import OrderSummary from "../OrderSummary";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import { useStore } from "../store";
import SkeletonLoading from "../ui/SkeletonLoading";

export default function App({}) {
  const customer = useStore((state) => state.customer);
  const order = useStore((state) => state.order);
  const fetchAll = useStore((state) => state.fetchAll);
  const setOrder = useStore((state) => state.setOrder);
  const setCustomer = useStore((state) => state.setCustomer);
  // const [isLoading, setIsLoading] = useState(false);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    fetchAll();
    // async function fetchData() {
    //   setIsLoading(true);
    //   const customer = (await getActiveCustomer()).activeCustomer;
    //   customer && setCustomer(customer);
    //   const order = (await getActiveOrder()).activeOrder;
    //   order && setOrder(order);
    //   setIsLoading(false);
    // }
    // fetchData();
  }, []);
  return (
    <div className="">
      <Nav
        customerName={customer && `${customer?.firstName} ${customer.lastName}`}
        totalQuantity={order?.totalQuantity}
      />
      <div className="max-w-5xl my-lg mx-auto">
        {loading || order === null ? (
          <div className="p-lg">
            <SkeletonLoading rows={3} />
          </div>
        ) : (
          <Card>
            <CardTitle>Checkout</CardTitle>
            <CardContent>
              <div className="flex flex-wrap">
                <div className="mr-sm mb-sm">
                  {order?.customer ? (
                    <>
                      {order?.state === "AddingItems" && (
                        <Shipping setOrder={setOrder} />
                      )}
                      {order?.state === "ArrangingPayment" && (
                        <Payment setOrder={setOrder} />
                      )}
                      {order?.state === "PaymentSettled" && (
                        <div className="flex justify-center items-center p-xl">
                          <div className="">
                            <div className="text-3xl font-semibold flex flex-wrap">
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
                    </>
                  ) : (
                    <CustomerDetail setOrder={setOrder} />
                  )}
                </div>
                {order?.state !== "PaymentSettled" && order?.customer && (
                  <div className="bg-neutral-200 p-lg h-fit">
                    <OrderSummary order={order} />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
