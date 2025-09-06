import { getOrders } from "@/services/order.service";
import React from "react";

export default async function MyOrdersPage() {
  const { data: orders } = await getOrders();

  console.log(orders);

  return <div>MyOrdersPage</div>;
}
