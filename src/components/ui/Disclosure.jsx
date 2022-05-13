import { useState } from "react";

export default function Disclosure({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        {title}
      </div>
      <div className={open ? "" : "hidden"}>{content}</div>
    </div>
  );
}
