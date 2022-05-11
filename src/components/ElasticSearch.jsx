import Input from "./ui/Input";
import SearchIcon from "./icon/Search";
import { useState, useEffect } from "react";
import { search } from "../api/client";
export default function ElasticSearch() {
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState("");
  console.log("running");

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      if (term) {
        const data = await search(term);
        console.log("data", data);
        if (data.search.totalItems > 0) {
          setItems(data.search.items);
        } else {
          setItems([{ productName: "No product found." }]);
        }
      } else {
        setItems([]);
      }
    }, 300);
    return () => clearTimeout(timeOutId);
  }, [term]);
  return (
    <>
      <div className="relative z-20 w-full font-medium">
        <Input
          icon={
            <div>
              <SearchIcon className="w-4 h-4" />
            </div>
          }
          // backgroundStyle="bg-white"
          type="text"
          onChange={(event) => setTerm(event.target.value)}
        />
        {items.length > 0 && (
          <div className="absolute bg-white w-full border-2 border-neutral-200">
            {items.map((item, index) => (
              <div key={index} className="px-sm py-xs hover:bg-neutral-200">
                <a href={`/product/${item.slug}`} className="block">
                  {item?.productName}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-800/80 z-10"></div> */}
    </>
  );
}
