export default function Footer() {
  return (
    <div className="p-md bg-neutral-100">
      <div className="flex flex-wrap">
        <div className="flex flex-col p-md text-neutral-700 text-sm">
          <span className="font-semibold text-base mb-xxs">Shipping</span>
          <span>UPS</span>
          <span>DHL</span>
        </div>
        <div className="flex flex-col p-md text-neutral-700 text-sm">
          <span className="font-semibold text-base mb-xxs">Payment</span>
          <span>Visa/Mastercard</span>
          <span>Paypal</span>
          <span>Klarna</span>
        </div>
        <div className="flex flex-col p-md text-neutral-700 text-sm">
          <span className="font-semibold text-base mb-xxs">Social</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
        <div className="flex flex-col p-md text-neutral-700 text-sm">
          <span className="font-semibold text-base mb-xxs">Contact</span>
          <span>
            <a href="mailto:admin@minh.berlin">admin@minh.berlin</a>
          </span>
        </div>
      </div>
      <hr className="my-sm" />
      <section className="flex items-center flex-col justify-center m-xs text-sm text-neutral-500">
        <p>@Minh</p>
        <p>
          Made with ❤️ from <span className="text-green-500">Berlin</span>
        </p>
      </section>
    </div>
  );
}
