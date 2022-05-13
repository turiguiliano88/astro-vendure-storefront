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
