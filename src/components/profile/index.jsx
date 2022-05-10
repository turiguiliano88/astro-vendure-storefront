import ProfileMenu from "../Menu";
import ProfileOrder from "./Order";
import ProfileAccount from "./Account";
import ProfileAddress from "./Address";
import { useState, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
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
        <div className="flex">
          <div className="w-[300px]">
            <ProfileMenu activeTab={activeTab} tabs={options} />
          </div>
          {activeTab === "order" && <ProfileOrder />}
          {activeTab === "account" && <ProfileAccount />}
          {activeTab === "address" && <ProfileAddress customer={customer} />}
        </div>
      ) : (
        <div className="max-w-sm my-sm mx-auto">
          <Login setCustomer={setCustomer} />
        </div>
      )}
    </>
  );
}
