import Button from "../ui/Button";
import { useState, useEffect } from "react";
import {
  addPaymentToOrder,
  getEligiblePaymentMethods,
  transitionOrderToState,
} from "../../api/client";
export default function Payment({ setOrder, eligiblePaymentMethods }) {
  const [paymentMethod, setPaymentMethod] = useState({});
  const [paymentMethods, setPaymentMethods] = useState(eligiblePaymentMethods);

  useEffect(() => {
    async function fetchPaymentMethods() {
      const data = await getEligiblePaymentMethods();
      setPaymentMethods(data.eligiblePaymentMethods);
    }
    fetchPaymentMethods();
  }, []);
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        setOrder(
          (await addPaymentToOrder(paymentMethod?.code, { id: 12 }))
            .addPaymentToOrder
        );
        // if (paymentMethod) await state.set
      }}
    >
      <div className="text-lg bg-neutral-100 p-sm mb-xs">Step 2: Payment</div>
      <div className="flex">
        {paymentMethods.map((item, index) => (
          <div className="flex items-center py-sm mr-sm" key={index}>
            <input
              type="radio"
              name="payment"
              value={item.id}
              required
              onClick={() => setPaymentMethod(item)}
            />
            <label className="ml-xs">{item.name}</label>
          </div>
        ))}
      </div>
      <div className="mt-sm">
        <Button submit>Next</Button>
      </div>
      <div className="mt-xs">
        <Button
          type="neutral"
          onClick={async () => {
            setOrder(
              (await transitionOrderToState("AddingItems"))
                .transitionOrderToState
            );
          }}
        >
          ← Modify shipping details
        </Button>
      </div>
    </form>
  );
}
