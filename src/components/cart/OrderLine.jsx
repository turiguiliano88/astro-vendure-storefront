import Select from "../ui/Select";
import { adjustOrderLine, removeOrderLine } from "../../api/client";
import TrashIcon from "../icon/Trash";
import Input from "../ui/Input";

export default function OrderLine({ line, quantities, setOrder }) {
  // const quantit = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex justify-center text-neutral-600">
      <div className="w-1/3 flex p-xs">
        <img
          className="object-contain w-full"
          src={`${line.featuredAsset.preview}?preset=thumb`}
        />
      </div>
      <div className="flex justify-between grow">
        <div className="p-xs">
          <div className="font-medium">{line.productVariant.product.name}</div>
          <div className="text-sm my-xs">{line.productVariant.name}</div>
          <div className="w-max">
            {quantities ? (
              <div className="flex items-center">
                <Select
                  options={quantities.map((item) => {
                    return {
                      name: item,
                      value: item,
                      // selected: item == line.quantity ? true : false,
                    };
                  })}
                  selected={line.quantity}
                  onChange={async (event) => {
                    const data = await adjustOrderLine(
                      Number(line.id),
                      Number(event.target.value)
                    );
                    console.log("change ", data);
                    setOrder(data);
                  }}
                />
                {/* <div className="">
                  <Input type="number" />
                </div> */}
                <div
                  className="ml-xs cursor-pointer"
                  onClick={async () => {
                    setOrder(await removeOrderLine(line.id).removeOrderLine);
                  }}
                >
                  <TrashIcon className="w-4 h-4" />
                </div>
              </div>
            ) : (
              "x " + line.quantity
            )}
          </div>
        </div>
        <div className="p-xs">
          <span className="font-semibold">{`€${line.linePrice}`}</span>
        </div>
      </div>
    </div>
  );
}
