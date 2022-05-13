import Disclosure from "../ui/Disclosure";
import Button from "../ui/Button";
import ShoppingBagIcon from "../icon/ShoppingBag";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { useState } from "react";
import { addItemToOrder, getActiveOrder } from "../../api/client";

export default function ProductCard({
  product,
  setOrderQuantity,
  setShowMiniCart,
}) {
  const [currentVariant, setCurrentVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const addToBag = async () => {
    const data = await addItemToOrder({
      productVariantId: currentVariant.id,
      quantity: Number(quantity),
    });
    console.log("data ", data);
    setOrderQuantity(data.addItemToOrder?.totalQuantity);
    setShowMiniCart(true);
  };
  return (
    <div className="flex p-sm flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/3">
        {/* <Splide aria-label="Splide Basic HTML Example">
          {product.assets.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <img className="w-full" src={item.preview} />
              </SplideSlide>
            );
          })}
        </Splide> */}
        <img className="w-full" src={product.featuredAsset?.preview} />
      </div>
      <div className="w-full md:w-2/3 p-xs md:p-sm">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        {/* <Disclosure
          client:visible
          description="Description"
          content="Somethinbg"
        /> */}
        <div className="my-xs text-lg font-semibold">
          €{currentVariant?.price * quantity}
        </div>
        <div className="my-sm">
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
          {/* {product.description} */}
        </div>
        <div className="my-sm text-sm">
          {product.variants.map((item, index) => {
            return (
              <span
                key={index}
                className={
                  currentVariant?.id === item.id
                    ? `bg-neutral-800 text-white py-xs px-sm mr-xs mb-xs inline-flex rounded-md`
                    : `bg-neutral-100 py-xs px-sm mr-xs mb-xs inline-flex rounded-md cursor-pointer hover:bg-neutral-300`
                }
                onClick={() => setCurrentVariant(item)}
              >
                {item.name}
              </span>
            );
          })}
        </div>

        <div className="flex">
          <div className="mr-xs">
            <Select
              options={[
                { name: 1, value: 1 },
                { name: 2, value: 2 },
              ]}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <Button isLoading={isLoading} onClick={addToBag}>
            Add to bag
          </Button>
        </div>
      </div>
    </div>
  );
}