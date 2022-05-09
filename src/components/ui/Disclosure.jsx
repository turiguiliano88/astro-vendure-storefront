import { useState } from "react";
import ChevronDownIcon from "../icon/ChevronDown.jsx";

export default function Disclosure({ description, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex w-full justify-between items-center rounded-sm p-sm hover:bg-gray-50 transition"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="text-xl">{description}</span>
        <ChevronDownIcon
          className={open ? "h-4 w-4 transition" : "h-4 w-4 rotate-180"}
        />
      </button>
      <div className={open ? "" : "hidden"}>{content}</div>
    </div>
  );
}
