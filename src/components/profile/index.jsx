import ProfileMenu from "../Menu";
import ProfileOrder from "./Order";
import ProfileAccount from "./Account";
import ProfileAddress from "./Address";
import Button from "../ui/Button";
import { useState, useEffect } from "react";
import Nav from "../Nav";
import { useStore } from "../store";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Order");
  const [isLoading, setIsLoading] = useState(false);

  const customer = useStore((state) => state.customer);
  const order = useStore((state) => state.order);
  const fetchAll = useStore((state) => state.fetchAll);

  useEffect(() => {
    fetchAll();
  }, []);

  const options = ["Order", "Address", "Account"].map((item) => {
    return {
      name: item,
      value: item,
      onClick: () => {
        setActiveTab(item);
      },
    };
  });
  return (
    <div>
      <Nav
        customerName={
          customer && `${customer?.firstName} ${customer?.lastName}`
        }
        totalQuantity={order?.totalQuantity}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <ProfileMenu activeTab={activeTab} tabs={options} />
            <div className="p-sm">
              <Button
                type="neutral"
                isLoading={isLoading}
                onClick={async () => {
                  setIsLoading(true);
                  const res = await logout();
                  if (res.logout.success) {
                    window.location.href = "/";
                  } else {
                    setIsLoading(false);
                  }
                }}
              >
                Logout
              </Button>
            </div>
          </div>
          <div className="grow">
            {activeTab === "Order" && (
              <ProfileOrder orders={customer?.orders?.items} />
            )}
            {activeTab === "Account" && <ProfileAccount customer={customer} />}
            {activeTab === "Address" && (
              <ProfileAddress addresses={customer.addresses} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
