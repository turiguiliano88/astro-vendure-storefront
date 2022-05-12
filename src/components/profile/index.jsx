import ProfileMenu from "../Menu";
import ProfileOrder from "./Order";
import ProfileAccount from "./Account";
import ProfileAddress from "./Address";
import { useState, useCallback, useEffect } from "react";
import Nav from "../Nav";
// import Login from "../login/Login";
export default function Profile({ customer, totalQuantity }) {
  const [activeTab, setActiveTab] = useState("Order");
  const [localCustomer, setCustomer] = useState(customer);

  console.log("customer", customer);
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
        customerName={`${localCustomer?.firstName} ${localCustomer?.lastName}`}
        totalQuantity={totalQuantity}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <ProfileMenu activeTab={activeTab} tabs={options} />
          </div>
          <div className="grow">
            {activeTab === "Order" && (
              <ProfileOrder orders={customer?.orders?.items} />
            )}
            {activeTab === "Account" && (
              <ProfileAccount
                // firstName={customer.firstName}
                // lastName={customer.lastName}
                // phoneNumber={customer.phoneNumber}
                // emailAddress={customer.emailAddress}
                customer={customer}
                setCustomer={setCustomer}
              />
            )}
            {activeTab === "Address" && (
              <ProfileAddress addresses={customer.addresses} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
