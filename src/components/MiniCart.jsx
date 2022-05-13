import Button from "./ui/Button";
import ShoppingBagIcon from "./icon/ShoppingBag";
export default function MiniCart({
  showMiniCart,
  setShowMiniCart,
  totalQuantity,
}) {
  return (
    <div className="relative transition">
      <div className="z-50 relative">
        <a href="/cart" className="z-50">
          <ShoppingBagIcon className="w-5 h-5" />
          <div className="text-white font-medium text-xs bottom-1 right-0 w-3 h-3 absolute bg-primary rounded-full flex items-center justify-center">
            {totalQuantity}
          </div>
        </a>
      </div>
      <div
        className={
          showMiniCart
            ? "absolute right-0 border-2 border-neutral-800 mt-xs z-50 bg-white w-max"
            : "hidden"
        }
      >
        <div className="p-md">
          <p className="mb-xs">
            You have {totalQuantity} {totalQuantity > 1 ? "items" : "item"}.
          </p>
          <a href="/cart">
            <Button>View cart</Button>
          </a>
        </div>
      </div>
      <div
        className={
          showMiniCart
            ? "fixed top-0 left-0 right-0 w-full h-full bg-neutral-600/90 z-30"
            : "hidden"
        }
        onClick={() => setShowMiniCart(false)}
      ></div>
    </div>
  );
}
