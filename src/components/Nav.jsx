import ShoppingBagIcon from "./icon/ShoppingBag";
import UserIcon from "./icon/User";
// import { state } from "../store";
import Button from "../components/ui/Button";
import Link from "./ui/Link";

export default function Nav({ totalQuantity, customerName }) {
  // console.log("order", state.order);
  // onMount(async () => {
  //   await state.getActiveCustomer();
  //   await state.getMe();
  //   await state.getActiveOrder();
  //   console.log(
  //     "customer",
  //     state.customer,
  //     "me",
  //     state.user,
  //     Object.keys(state.customer).length
  //   );
  // });
  // const state = createMutable({
  //   order: JSON.parse(localStorage.order || "{}"),
  //   // order: JSON.parse(localStorage.getItem("order") || "{}"),
  //   // order: [],
  //   async addItem({ productVariantId, quantity }) {
  //     const data = await addItemToOrder({ productVariantId, quantity });
  //     console.log("data", data);
  //     this.order = data.addItemToOrder;
  //     localStorage.order = JSON.stringify(this.order);
  //     // localStorage.order = JSON.stringify(this.order);
  //   },
  //   async getOrder() {
  //     const data = await getActiveOrder();
  //     console.log("data", data);
  //     this.order = data.activeOrder;
  //   },
  // });
  // const [order, setOrder] = createSignal(null);
  // const [order, setOrder] = useOrder();
  // console.log("order", store.activeOrder);
  // onMount(async () => {
  //   await state.getOrder();
  // });

  // console.log("nav", JSON.parse(localStorage.order));
  // console.log("nav", JSON.parse(localStorage.getItem("order")));
  // const [order, setOrder] = createSignal(
  //   JSON.parse(localStorage.getItem("order"))
  // );
  // if (token) state.authToken = token;
  // if (order) state.order = order;
  return (
    <div className="flex justify-between items-center m-sm text-sm">
      {/* <span>{state.authToken}</span> */}
      <span className="font-semibold text-lg">
        <Link href="/">muavagui</Link>
      </span>
      {/* <div>
        <span className="mx-xs opacity-60 hover:opacity-100 hover:before:content-['→_']">
          <Link href="/about-us">About us</Link>
        </span>
        <span className="mx-xs opacity-60 hover:before:content-['→_'] hover:opacity-100">
          <a href="/about-us">Free shipping from €50</a>
        </span>
      </div> */}
      <div className="flex items-center">
        {/* {customerName ? (
          <a href="/user" className="font-semibold">
            {customerName}
          </a>
        ) : (
          <div>
            <a href="/register">
              <Button size="small" type="transparent">
                Register
              </Button>
            </a>
            <a href="/login">
              <Button size="small">Login</Button>
            </a>
          </div>
        )} */}
        <a href="/user">
          <UserIcon className="w-5 h-5" />
        </a>
        <div className="relative">
          <a href="/cart">
            <ShoppingBagIcon className="w-5 h-5" />
            <div className="text-white font-medium text-xs bottom-1 right-0 w-3 h-3 absolute bg-primary rounded-full flex items-center justify-center">
              {totalQuantity}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
