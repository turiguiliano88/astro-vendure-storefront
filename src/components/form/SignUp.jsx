import Button from "../ui/Button";
import Input from "../ui/Input";
import { Card, CardContent, CardTitle } from "../ui/Card";
import Select from "../ui/Select";
// import { useState } from "react";
// import TermsOfUse from "./TermsOfUse";
// import countries from "../../lib/countries.js";

export default function SignUp() {
  // const [showModal, setShowModal] = useState(false);
  // const [country, setCountry] = useState("VN");
  // const [country, setCountry] = createSignal("VN");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert("submit");
      }}
    >
      <Card>
        <CardTitle>Sign up</CardTitle>
        <CardContent>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 pr-2">
              <Input type="text" label="First name" />
            </div>
            <div className="w-full md:w-6/12">
              <Input type="text" label="Last name" />
            </div>
          </div>
          <Input type="email" label="Email*" required />
          <Input type="password" label="Password*" required />
          {/* <Select
            label="Country"
            selected={country()}
            onChange={(event) => setCountry(event.target.value)}
            options={countries.map((item) => {
              return { name: item.name, value: item.code };
            })}
          /> */}
          <Input type="number" label="Phone" />

          <div className="my-xs">
            <Button submit>Sign up</Button>
          </div>
          <hr className="my-sm text-gray-200" />
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
