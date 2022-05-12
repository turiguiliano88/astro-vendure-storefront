import Nav from "../components/Nav";
import Login from "../components/form/Login";
import { useEffect, useState, useCallback } from "react";
// import { getActiveCustomer } from "../api/client";
import { getActiveOrder, getActiveCustomer } from "../api/shop";
import { Card, CardContent, CardTitle } from "../components/ui/Card";
import ItemCard from "../components/ItemCard";
import useStore from "../components/hook/useStore";
import Loading from "../components/ui/Loading";
export default function App({ products }) {
  const [customer, setCustomer] = useState(null);
  const [order, setOrder] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(true);
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
      setIsLoading(true);
      let data = await getActiveCustomer();
      setCustomer(data.activeCustomer);
      data = await getActiveOrder();
      setOrder(data.activeOrder);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Nav
        showMiniCart={showMiniCart}
        setShowMiniCart={setShowMiniCart}
        customerName={
          customer &&
          customer.firstName &&
          `${customer.firstName} ${customer.lastName}`
        }
        totalQuantity={order?.totalQuantity}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <Card>
          <CardTitle>Our offers</CardTitle>
          <CardContent>
            <div className="flex flex-wrap">
              {products?.items?.map((item, index) => {
                return (
                  <div className="w-1/2 md:w-1/3 xl:w-1/4 p-sm" key={index}>
                    <ItemCard
                      img_url={item.featuredAsset?.preview}
                      path={`product/${item.slug}`}
                      name={item.name}
                      price={item.variants[0].price}
                    />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
