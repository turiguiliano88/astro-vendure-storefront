import Button from "../ui/Button";
import Input from "../ui/Input";
import { Card, CardContent, CardTitle } from "../ui/Card";
import Check from "../ui/Check";
import { useState } from "react";
import { login } from "../../api/client";

export default function Login({ setCustomer }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await login(email, password, rememberMe);
        window.location.href = "/profile";
      }}
    >
      <Card>
        <CardTitle>Log In</CardTitle>
        <CardContent>
          <div className="mb-xs">
            <Input
              label="Email*"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
            />
          </div>
          <div className="mb-xs">
            <Input
              label="Password*"
              onInput={(event) => setPassword(event.target.value)}
              required
              type="password"
            />
          </div>
          <div className="mb-md">
            <Check
              label="Remember me"
              onChange={() => setRememberMe(!rememberMe)}
            />
          </div>
          <div className="self-start">
            <Button submit>Login</Button>
          </div>
          <hr className="my-sm text-neutral-200" />
          <div className="text-gray-500">
            <span>Don't have an account? </span>
            <a className="text-primary">Sign up</a>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
