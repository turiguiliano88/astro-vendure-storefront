import Button from "../components/ui/Button";
import ElasticSearch from "./ElasticSearch";
import MiniCart from "./MiniCart";

export default function Nav({
  totalQuantity,
  customerName,
  showMiniCart,
  setShowMiniCart,
  showSearchBox,
}) {
  return (
    <div className="m-sm">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">
          <a href="/">Storefront</a>
        </span>
        {showSearchBox && (
          <div className="grow px-xs hidden md:flex max-w-md">
            <ElasticSearch />
          </div>
        )}
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
          <div className="relative">
            <MiniCart
              showMiniCart={showMiniCart}
              setShowMiniCart={setShowMiniCart}
              totalQuantity={totalQuantity}
            />
          </div>
        </div>
      </div>
      <div className="flex grow py-xs md:hidden">
        <ElasticSearch />
      </div>
    </div>
  );
}
