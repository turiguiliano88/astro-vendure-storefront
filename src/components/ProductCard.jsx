import Disclosure from "./ui/Disclosure";
import Button from "./ui/Button";
import ShoppingBagIcon from "./icon/ShoppingBag";
import Input from "./ui/Input";
import Select from "./ui/Select";
import { useState } from "react";
// import { For, Show, onMount, createSignal } from "solid-js";
// import Splide from "@splidejs/splide";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import pkg from "@splidejs/react-splide";
// const { Splide2, SplideSlide } = pkg;
import { addItemToOrder, getActiveOrder } from "../api/shop";
// import { state } from "../store";

export default function ProductCard({ product, setOrder }) {
  const [currentVariant, setCurrentVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  // onMount(() => {
  //   new Splide(".splide").mount();
  // });

  const addToBag = async () => {
    // state.add
    // localStorage.setItem(
    //   "auth_token",
    //   "ff7c33f7f794de013b8451c6a6c6701caa5eea74d1aa3228592176e3b8ba0737"
    // );
    // state.authToken =
    //   "ff7c33f7f794de013b8451c6a6c6701caa5eea74d1aa3228592176e3b8ba0737";
    // await state.addItem({
    //   productVariantId: currentVariant().id,
    //   quantity: noOfItems(),
    // });
    const data = await addItemToOrder({
      productVariantId: currentVariant.id,
      quantity: Number(quantity),
    });
    console.log("data ", data);
    setOrder(data.addItemToOrder);
  };
  return (
    <div className="flex p-sm flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/3 pr-xs">
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
      <div className="w-full md:w-2/3 p-xs">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        {/* <Disclosure
          client:visible
          description="Description"
          content="Somethinbg"
        /> */}
        <div className="my-sm">
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
          {/* {product.description} */}
        </div>
        <div className="my-xs">
          {product.variants.map((item, index) => {
            return (
              <span
                key={index}
                className={
                  currentVariant?.id === item.id
                    ? `bg-neutral-300 py-xs px-sm mr-xs mb-xs inline-flex rounded-md`
                    : `bg-neutral-100 py-xs px-sm mr-xs mb-xs inline-flex rounded-md`
                }
                onClick={() => setCurrentVariant(item)}
              >
                {item.name}
              </span>
            );
          })}
        </div>
        {currentVariant && (
          <div className="my-xs">€{currentVariant?.price * quantity}</div>
        )}
        <div className="w-fit">
          <Select
            options={[
              { name: 1, value: 1 },
              { name: 2, value: 2 },
            ]}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <Button onClick={addToBag}>Add to bag</Button>
      </div>
    </div>
  );
}
