export default function ItemCard({ name, price, img_url, path }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="h-full cursor-pointer">
        <a href={path} className="h-full flex">
          <img
            src={`${img_url}`}
            className="object-cover hover:scale-105 transition delay-50"
          />
        </a>
      </div>
      <div className="bg-white py-xxs px-xs absolute left-xxs top-xxs rounded-sm">
        <div className="text-sm">{name}</div>
        <div className="text-sm text-primary">€{price}</div>
      </div>
    </div>
  );
}
