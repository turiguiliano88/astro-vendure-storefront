import ProfileMenu from "../Menu";
import ProfileOrder from "./Order";
import ProfileAccount from "./Account";
import ProfileAddress from "./Address";
import { useState, useCallback, useEffect } from "react";
// import { useRecoilState } from "recoil";
import { customerState } from "../../store";
import { getActiveCustomer } from "../../api/shop";
import Button from "../ui/Button";
import Login from "../form/Login";
export default function Profile({ customer, setCustomer, path }) {
  const [activeTab, setActiveTab] = useState("Order");
  // const [customer, setCustomer] = useRecoilState(customerState);
  // const fetchData = useCallback(async () => {
  //   const data = await getActiveCustomer();

  //   setCustomer(data.activeCustomer);
  // }, []);
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
  console.log("customer", customer);
  const options = ["Order", "Address", "Account"].map((item) => {
    return {
      name: item,
      value: item,
      onClick: () => {
        setActiveTab(item);
      },
      // href: "/profile/" + item.toLowerCase(),
    };
  });
  return (
    <>
      {customer ? (
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <ProfileMenu activeTab={activeTab} tabs={options} />
          </div>
          {activeTab === "Order" && (
            <div className="grow">
              <ProfileOrder orders={customer?.orders?.items} />
            </div>
          )}
          {activeTab === "Account" && (
            <ProfileAccount
              firstName={customer.firstName}
              lastName={customer.lastName}
              phoneNumber={customer.phoneNumber}
            />
          )}
          {activeTab === "Address" && (
            <ProfileAddress addresses={customer.addresses} />
          )}
        </div>
      ) : (
        <div className="max-w-sm my-sm mx-auto">
          <Login setCustomer={setCustomer} />
        </div>
      )}
    </>
  );
}
