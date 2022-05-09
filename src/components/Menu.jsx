import { useState } from "react";
import ChevronRightIcon from "./icon/ChevronRight";

export default function Menu(props) {
  const options = ["Order", "Address", "Account"];
  //   const active = "Order";
  const [active, setActive] = useState("Order");
  console.log("tabs", props.tabs);
  return (
    <div className="m-sm bg-white">
      {props.tabs
        .map((item) => {
          return {
            name: item.name,
            value: item.value,
            onClick: item.onClick,
          };
        })
        .map((item, index) => (
          <div
            className={
              item.name === props.activeTab
                ? "bg-neutral-300 p-sm flex justify-between items-center"
                : "p-sm flex justify-between items-center cursor-pointer hover:bg-neutral-100"
            }
            key={index}
            onClick={item.onClick}
          >
            {item.value}
            <ChevronRightIcon className="h-3 w-3" />
          </div>
        ))}
    </div>
  );
}
