import ShoppingBagIcon from "./icon/ShoppingBag";
import UserIcon from "./icon/User";
// import { state } from "../store";
import Button from "../components/ui/Button";
import SearchIcon from "./icon/Search";
import ElasticSearch from "./ElasticSearch";

export default function Nav({ totalQuantity, customerName }) {
  return (
    <div className="m-sm">
      <div className="flex justify-between items-center">
        {/* <span>{state.authToken}</span> */}
        <span className="font-semibold text-lg">
          <a href="/">muavagui</a>
        </span>
        <div className="grow px-xs hidden md:flex max-w-md">
          <ElasticSearch />
        </div>
        {/* <div>
        <span className="mx-xs opacity-60 hover:opacity-100 hover:before:content-['→_']">
          <Link href="/about-us">About us</Link>
        </span>
        <span className="mx-xs opacity-60 hover:before:content-['→_'] hover:opacity-100">
          <a href="/about-us">Free shipping from €50</a>
        </span>
      </div> */}
        <div className="flex items-center">
          {customerName ? (
            <a href="/profile" className="font-semibold">
              {customerName}
            </a>
          ) : (
            <div className="flex">
              <a href="/register">
                <Button size="small" type="transparent">
                  Register
                </Button>
              </a>
              <a href="/login">
                <Button size="small">Login</Button>
              </a>
            </div>
          )}
          {/* <a href={customerName ? "/profile/order" : "/profile/login"}> */}
          {/* <a href="/profile">
            <UserIcon className="w-5 h-5" />
          </a> */}
          {/* </a> */}
          {/* <div className="ml-xs">
          <SearchIcon className="w-5 h-5" />
        </div> */}
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
      <div className="flex grow py-xs md:hidden">
        <ElasticSearch />
      </div>
    </div>
  );
}
