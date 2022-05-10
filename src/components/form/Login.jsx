import Button from "../ui/Button";
import Input from "../ui/Input";
import { Card, CardContent, CardTitle } from "../ui/Card";
import Check from "../ui/Check";
// import { createClient } from "../../utils/client";
// import { onMount, createSignal } from "solid-js";
import { useEffect, useState } from "react";
import { login, getActiveCustomer } from "../../api/shop";
// import Link from "next/link";
// import { useState } from "react";
// import { state } from "../../store";

export default function Login({ setCustomer }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        // alert("submit");
        const id = await login({
          username: email,
          password: password,
          rememberMe: rememberMe,
        });
        console.log(id);
        const data = await getActiveCustomer();
        setCustomer(data.activeCustomer);
      }}
    >
      <Card>
        <CardTitle>Log In</CardTitle>
        <CardContent>
          <Input
            label="Email*"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
          />
          <Input
            label="Password*"
            onInput={(event) => setPassword(event.target.value)}
            required
            type="password"
          />
          <div className="mb-md">
            <Check
              label="Remember me"
              onChange={() => setRememberMe(!rememberMe)}
            />
          </div>
          <div className="self-start">
            <Button submit>Login</Button>
          </div>
          <div className="my-sm h-[2px] bg-gray-800" />
          <div className="text-gray-500">
            <span>Don't have an account? </span>
            <a className="text-primary">Sign up</a>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
