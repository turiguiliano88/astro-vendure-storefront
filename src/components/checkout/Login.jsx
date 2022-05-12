import Input from "../ui/Input";
import Button from "../ui/Button";
import Check from "../ui/Check";
import { useState } from "react";
import { login, getActiveOrder } from "../../api/client";

export default function Login({ setOrder }) {
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <form
      className="w-full md:w-1/2 border-neutral-200 border-2 p-lg h-fit"
      onSubmit={async (event) => {
        event.preventDefault();
        await login(email, password, true);
        setOrder((await getActiveOrder()).activeOrder);
      }}
    >
      <div className="text-2xl mb-sm font-semibold">Login</div>
      <div className="mb-xs">
        <Input
          type="email"
          label="Email*"
          required
          onChange={(event) => setEmail(event.target.value)}
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
      <div className="mb-md">
        <Check
          label="Remember me"
          onChange={() => setRememberMe(!rememberMe)}
        />
      </div>
      <div className="my-sm">
        <Button submit>Login</Button>
      </div>
      <span className="text-sm text-neutral-600">
        Please login if you're already registered with us.
      </span>
    </form>
  );
}
