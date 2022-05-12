import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { setCustomerForOrder, login } from "../../api/client";
import Login from "./Login";
import Register from "./Register";
export default function CustomerDetail({ setOrder }) {
  return (
    <div className="">
      <div className="text-lg bg-neutral-100 p-sm mb-xs">
        Step 0: Register or Login
      </div>
      <div className="flex justify-center flex-wrap md:flex-nowrap">
        <Login setOrder={setOrder} />
        <Register setOrder={setOrder} />
      </div>
    </div>
  );
}
