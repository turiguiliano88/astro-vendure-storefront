import { Card, CardContent, CardTitle } from "../ui/Card";
import Shipping from "./Shipping";
import Payment from "./Payment";
// import { useState, useEffect } from "react";
// import { getActiveCustomer, getActiveOrder } from "../../api/shop";

export default function Checkout({ order }) {
  return (
    <div className="max-w-7xl">
      <Card>
        <CardTitle>Checkout</CardTitle>
        <CardContent>
          {order?.state === "AddingItems" ? <Shipping /> : <Payment />}
        </CardContent>
      </Card>
    </div>
  );
}
