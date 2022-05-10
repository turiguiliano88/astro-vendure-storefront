import { getActiveOrder, getActiveCustomer } from "../../api/shop";

async function fetchData() {
  // let store = {customer: null, order: null};
  const customer = (await getActiveOrder()).getActiveOrder;
  const order = (await getActiveCustomer()).getActiveCustomer;
  return {
    customer,
    order,
  };
}

export default function useStore() {
  const { data, error } = useSWR("fetchData", fetchData);

  return {
    store: data,
    isLoading: !error && !data,
    isError: error,
  };
}
