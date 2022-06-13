import Nav from "../Nav";
import { Card, CardTitle, CardContent } from "../ui/Card";
import ItemCard from "../ItemCard";
import useActiveData from "../useActiveData";

export default function App({ collections, products }) {
  const [customer, order] = useActiveData();
  console.log("customer", customer);
  return (
    <>
      <Nav
        showSearchBox={true}
        customerName={
          customer ? `${customer.firstName} ${customer.lastName}` : null
        }
        totalQuantity={order ? order.totalQuantity : null}
      />
      <div className="max-w-7xl my-lg mx-auto">
        <div>
          <Card>
            <CardTitle>Collections</CardTitle>
            <CardContent>
              <div className="flex flex-wrap">
                {collections.items?.map((item) => {
                  return (
                    <div
                      className="w-1/2 md:w-1/3 xl:w-1/4 p-xxs md:p-xs"
                      key={item.slug}
                    >
                      <a href={`/collection/${item.slug}`}>{item.name}</a>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardTitle>Top products</CardTitle>
            <CardContent>
              <div className="flex flex-wrap">
                {products.items?.map((item) => {
                  return (
                    <div
                      className="w-1/2 md:w-1/3 xl:w-1/4 p-xxs md:p-xs"
                      key={item.slug}
                    >
                      <ItemCard
                        img_url={item.featuredAsset.preview}
                        path={`/product/${item.slug}`}
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
    </>
  );
}
