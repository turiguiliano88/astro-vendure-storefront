import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { setCustomerForOrder, registerCustomerAccount } from "../../api/client";

export default function Register({ setOrder }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <form
      className="w-full md:w-1/2 p-lg"
      onSubmit={async (event) => {
        event.preventDefault();
        const data = await setCustomerForOrder(
          firstName,
          lastName,
          phoneNumber,
          emailAddress
        );
        setOrder(data.setCustomerForOrder);
        await registerCustomerAccount(
          firstName,
          lastName,
          phoneNumber,
          emailAddress,
          password
        );
      }}
    >
      <div className="flex flex-wrap mb-xs ">
        <div className="w-full md:w-6/12 md:pr-xs">
          <Input
            type="text"
            label="First name*"
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="w-full md:w-6/12">
          <Input
            type="text"
            label="Last name*"
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-xs">
        <Input
          type="email"
          label="Email*"
          onChange={(event) => setEmailAddress(event.target.value)}
          required
        />
      </div>
      <div className="mb-xs">
        <Input
          type="password"
          label="Password*"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <div className="mb-xs">
        <Input
          type="tel"
          label="Phone number"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div className="mt-sm">
        <Button submit>Register and continue</Button>
      </div>
      <div className="mb-sm">
        <Button type="transparent">Continue as guest</Button>
      </div>
    </form>
  );
}
