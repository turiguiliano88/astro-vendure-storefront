import create from "zustand";
import { getActiveCustomer, getActiveOrder } from "../api/client";
import produce from "immer";

export const useStore = create((set) => ({
  customer: null,
  order: null,
  orderQuantity: null,
  loading: false,
  fetchAll: async () => {
    set({ loading: true });
    const customer = (await getActiveCustomer()).activeCustomer;
    customer && set({ customer: customer });
    const order = (await getActiveOrder()).activeOrder;
    order && set({ order: order, orderQuantity: order.totalQuantity });
    set({ loading: false });
  },
  setCustomer: (data) => set({ customer: data }),
  setOrder: (data) => set({ order: data }),
  setOrderQuantity: (q) => set({ orderQuantity: q }),
}));
