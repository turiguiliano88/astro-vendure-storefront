import Nav from "../components/Nav";
import Profile from "../components/profile";
import Loading from "../components/ui/Loading";
// import { RecoilRoot, atom, useRecoilState } from "recoil";
import { useEffect, useState, useCallback } from "react";
// import { getActiveCustomer } from "../api/client";
import { getActiveOrder, getActiveCustomer } from "../api/client";

export default function App({ path }) {
  // console.log("local storage", localStorage.customer);
  //   const [customer, setCustomer] = useState(
  //     JSON.parse(localStorage.customer || "{}")
  //   );
  const [customer, setCustomer] = useState(null);
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("customer", customer);

  useEffect(() => {
    // const fetchCustomer = async () => {
    //   const data = await getActiveCustomer();
    //   if (data.activeCustomer?.id !== customer) {
    //     setCustomer(data.activeCustomer);
    //     // localStorage.customer = JSON.stringify(data.activeCustomer);
    //   }
    // };

    // const fetchOrder = async () => {
    //   const data = await getActiveOrder();
    //   if (data.activeOrder?.id !== order?.id) {
    //     setOrder(data.activeOrder);
    //     // localStorage.order = JSON.stringify(data.activeOrder);
    //   }
    // };
    // fetchCustomer();
    // fetchOrder();
    async function fetchData() {
      // setIsLoading(true);
      console.log(isLoading);
      let data = await getActiveCustomer();
      setCustomer(data.activeCustomer);
      data = await getActiveOrder();
      setOrder(data.activeOrder);
      setIsLoading(false);
      console.log(isLoading);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Nav
        customerName={
          customer &&
          customer.firstName &&
          `${customer.firstName} ${customer.lastName}`
        }
        totalQuantity={order?.totalQuantity}
      />

      {/* <div> */}
      {/* <div className="h-[300px] max-w-4xl mx-auto">
        <Loading />
      </div> */}
      {isLoading ? (
        <div className="h-[200px] max-w-4xl mx-auto">
          <Loading />
        </div>
      ) : (
        <Profile customer={customer} setCustomer={setCustomer} path={path} />
      )}
    </div>
  );
}
