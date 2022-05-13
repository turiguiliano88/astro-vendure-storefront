import { Card, CardContent, CardTitle } from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function ProfileAddress({ addresses }) {
  return (
    <Card>
      <CardTitle>
        <div className="flex items-center">Shipping address</div>
      </CardTitle>
      <CardContent>
        {addresses?.map((item, index) => (
          <div
            className="p-sm border-2 border-neutral-300 w-fit relative"
            key={index}
          >
            <div>{item.fullName}</div>
            <div>{item.streetLine1}</div>
            <div>{`${item.city}, ${item.province}`}</div>
            <div>{item.phoneNumber}</div>
            {item.defaultShippingAddress && (
              <div className="mt-sm">
                <Badge>default</Badge>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
