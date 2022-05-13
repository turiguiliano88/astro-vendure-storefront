import Button from "../ui/Button";
import Input from "../ui/Input";
import { Card, CardContent, CardTitle } from "../ui/Card";
import Select from "../ui/Select";
import { registerCustomerAccount } from "../../api/client";
import { useState } from "react";
// import TermsOfUse from "./TermsOfUse";
// import countries from "../../lib/countries.js";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        // alert("submit");
        const data = await registerCustomerAccount(
          firstName,
          lastName,
          phoneNumber,
          emailAddress,
          password
        );
        if (data.registerCustomerAccount?.success)
          window.location.href = "/login";
      }}
    >
      <Card>
        <CardTitle>Register</CardTitle>
        <CardContent>
          <div className="flex flex-wrap mb-xs">
            <div className="w-full md:w-6/12 pr-2">
              <Input
                type="text"
                label="First name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="w-full md:w-6/12">
              <Input
                type="text"
                label="Last name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div className="mb-xs">
            <Input
              type="email"
              label="Email*"
              required
              onChange={(event) => setEmailAddress(event.target.value)}
            />
          </div>
          <div className="mb-xs">
            <Input
              type="password"
              label="Password*"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-xs">
            <Input
              type="tel"
              label="Phone"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="my-xs">
            <Button submit>Sign up</Button>
          </div>
          <hr className="my-sm text-neutral-200" />
          <div className="self-start text-gray-500">
            By clicking the 'Sign up' button, you confirm that you accept our{" "}
            <span
              className="underline cursor-pointer text-primary"
              // onClick={() => setShowModal(!showModal)}
            >
              Term of Use
            </span>{" "}
            and{" "}
            <span className="underline cursor-pointer text-primary">
              Privacy Policy
            </span>
          </div>
          {/* </div> */}
        </CardContent>
      </Card>
      {/* <TermsOfUse
        enabled={showModal}
        trigger={() => setShowModal(!showModal)}
      /> */}
    </form>
  );
}
