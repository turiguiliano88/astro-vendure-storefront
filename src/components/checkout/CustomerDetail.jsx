import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
export default function CustomerDetail() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <form className="">
      <div className="text-lg bg-neutral-100 p-sm mb-xs">
        Step 0: Register or Login
      </div>
      <div className="flex justify-center flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 border-neutral-200 border-2 p-lg h-fit">
          <div className="text-2xl mb-sm font-semibold">Login</div>
          <div className="mb-xs">
            <Input type="email" label="Email*" required />
          </div>
          <div className="mb-xs">
            <Input type="password" label="Password*" required />
          </div>
          <div className="my-sm">
            <Button>Login</Button>
          </div>
          <span className="text-sm text-neutral-600">
            Please login if you're already registered with us.
          </span>
        </div>
        <div className="w-full md:w-1/2 p-lg">
          <div className="flex flex-wrap mb-xs ">
            <div className="w-full md:w-6/12 md:pr-xs">
              <Input type="text" label="First name*" required />
            </div>
            <div className="w-full md:w-6/12">
              <Input type="text" label="Last name*" required />
            </div>
          </div>
          <div className="mb-xs">
            <Input type="email" label="Email*" required />
          </div>
          <div className="mb-xs">
            <Input type="password" label="Password*" required />
          </div>
          <div className="mt-sm">
            <Button>Register and continue</Button>
          </div>
          <div className="mb-sm">
            <Button type="transparent">Continue as guest</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
