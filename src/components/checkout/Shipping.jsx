import Button from "../ui/Button";
import Input from "../ui/Input";
import { useState, useEffect, useCallback } from "react";
import { getEligibleShippingMethods } from "../../api/shop";

export default function Shipping() {
  const [shippingMethod, setShippingMethod] = useState(0);
  const [shippingMethods, setShippingMethods] = useState([]);
  const [fullName, setFullName] = useState("");
  const [streetLine1, setStreetLine1] = useState("");
  const [streetLine2, setStreetLine2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  // const [countryCode, setCountryCode] = useState("DE");
  const [phoneNumber, setPhoneNumber] = useState(0);
  // onMount(async () => {
  //   await state.getEligibleShippingMethods();
  // });
  const fetchEligibleShippingMethods = useCallback(async () => {
    const data = await getEligibleShippingMethods();
    setShippingMethods(data.eligibleShippingMethods);
  }, []);
  useEffect(() => {
    fetchEligibleShippingMethods();
  }, [fetchEligibleShippingMethods]);
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        // if (shippingMethod)
        //   await state.setOrderShippingMethod(shippingMethod());
        // console.log(
        //   await state.setOrderShippingAddress(
        //     fullName(),
        //     streetLine1(),
        //     streetLine2(),
        //     city(),
        //     province(),
        //     phoneNumber()
        //   )
        // );
        // await state.transitionOrderToState("ArrangingPayment");
      }}
    >
      <div className="text-lg bg-neutral-100 p-sm mb-xs">Step 1: Shipping</div>
      <div className="flex">
        {shippingMethods.map((item, index) => (
          <div className="flex items-center py-sm mr-sm" key={index}>
            <input
              type="radio"
              name="shipping"
              value={item.id}
              required
              onClick={() => setShippingMethod(item.id)}
            />
            <label className="ml-xs">{item.name}</label>
          </div>
        ))}
      </div>
      <Input
        type="text"
        label="Full name"
        onChange={(event) => setFullName(event.target.value)}
      />
      <Input
        type="text"
        label="Street Line 1*"
        onChange={(event) => setStreetLine1(event.target.value)}
      />
      <Input
        type="text"
        label="Street Line 2"
        onChange={(event) => setStreetLine2(event.target.value)}
      />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 pr-2">
          <Input
            type="text"
            label="City"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Input
            type="text"
            label="Province"
            onChange={(event) => setProvince(event.target.value)}
          />
        </div>
      </div>
      <Input
        type="tel"
        label="Phone number"
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <div className="mt-sm">
        <Button submit>Next</Button>
      </div>
    </form>
  );
}
