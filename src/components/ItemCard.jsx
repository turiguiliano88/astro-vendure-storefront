import Link from "./ui/Link";

export default function ItemCard({ name, price, img_url, path }) {
  return (
    <div className="relative m-sm">
      <div className="object-cover cursor-pointer">
        <Link href={path}>
          <img src={img_url} className="" />
        </Link>
      </div>
      <div className="bg-white py-xxs px-sm absolute right-xs top-xs rounded-sm drop-shadow-lg">
        <div className="text-sm">{name}</div>
        <div className="text-sm text-primary">€{price}</div>
      </div>
    </div>
  );
}
