import ProfileMenu from "../Menu";
import ProfileOrder from "./Order";
import ProfileAccount from "./Account";
import ProfileAddress from "./Address";
import { useState, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { customerState } from "../../store";
import { getActiveCustomer } from "../../api/shop";
export default function Profile({ customer }) {
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
    };
  });
  return (
    <div className="flex">
      <div className="w-[300px]">
        <ProfileMenu activeTab={activeTab} tabs={options} />
      </div>
      {/* <div className="">
        <ProfileOrder />
      </div> */}
      {activeTab === "Order" && <ProfileOrder />}
      {activeTab === "Account" && <ProfileAccount />}
      {activeTab === "Address" && <ProfileAddress customer={customer} />}
    </div>
  );
}
