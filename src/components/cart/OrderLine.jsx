import Select from "../ui/Select";
export default function OrderLine({ line, quantities }) {
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
              <Select
                options={quantities.map((item) => {
                  return {
                    name: item,
                    value: item,
                    // selected: item == line.quantity ? true : false,
                  };
                })}
                selected={line.quantity}
              />
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
