export default function ItemCard({ name, price, img_url, path }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="h-full cursor-pointer">
        <a href={path} className="h-[200px] md:h-[300px] w-full flex">
          <img
            loading="lazy"
            src={`${img_url}`}
            className="object-cover hover:scale-105 transition delay-50 w-full"
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
