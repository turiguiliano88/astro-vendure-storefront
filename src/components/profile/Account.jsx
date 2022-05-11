import { Card, CardContent, CardTitle } from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { updateCustomer } from "../../api/client";
import { useState } from "react";

export default function ProfileAccount({
  // firstName,
  // lastName,
  // phoneNumber,
  // emailAddress,
  customer,
  setCustomer,
}) {
  const [firstName, setFirstName] = useState(customer.firstName);
  const [lastName, setLastName] = useState(customer.lastName);
  const [phoneNumber, setPhoneNumber] = useState(customer.phoneNumber);
  return (
    <Card>
      <CardTitle>Account</CardTitle>
      <CardContent>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const data = (
              await updateCustomer(firstName, lastName, phoneNumber)
            ).updateCustomer;
            setCustomer({
              ...customer,
              firstName: data.firstName,
              lastName: data.lastName,
              phoneNumber: data.phoneNumber,
            });
          }}
        >
          <div className="mb-xs">
            <Input
              type="text"
              label="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="mb-xs">
            <Input
              type="text"
              label="Last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="mb-xs">
            <Input
              type="tel"
              label="Phone number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="mb-sm">
            <Input
              type="text"
              label="Email"
              value={customer.emailAddress}
              disabled
            />
          </div>
          <div className="self-start">
            <Button submit>Update</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
