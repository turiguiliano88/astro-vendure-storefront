import Select from "../ui/Select";
export default function OrderLine({ line }) {
  const quantity = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex justify-center">
      <div className="w-1/4 flex justify-center">
        <img
          className="object-contain"
          src={`${line.featuredAsset.preview}?preset=thumb`}
        />
      </div>
      <div className="w-2/4 p-sm">
        <div className="font-medium">{line.productVariant.product.name}</div>
        <div className="text-sm my-xs">{line.productVariant.name}</div>
        <div className="w-max">
          <Select
            options={quantity.map((item) => {
              return {
                name: item,
                value: item,
                selected: item == line.quantity ? true : false,
              };
            })}
          />
        </div>
      </div>
      <div className="w-1/4 p-sm">
        <span className="font-semibold">{`€${line.linePrice}`}</span>
      </div>
    </div>
  );
}
