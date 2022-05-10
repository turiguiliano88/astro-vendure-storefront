import { Card, CardContent, CardTitle } from "../ui/Card";
import Input from "../ui/Input";
export default function ProfileAccount({ firstName, lastName, phoneNumber }) {
  return (
    <Card>
      <CardTitle>Account</CardTitle>
      <CardContent>
        <div className="mb-xs">
          <Input type="text" label="First name" value={firstName} />
        </div>
        <div className="mb-xs">
          <Input type="text" label="Last name" value={lastName} />
        </div>
        <div className="mb-xs">
          <Input type="tel" label="Phone number" value={phoneNumber} />
        </div>
      </CardContent>
    </Card>
  );
}
