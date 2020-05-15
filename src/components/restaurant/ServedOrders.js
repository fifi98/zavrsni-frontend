import React from "react";
import MainContainer from "../MainContainer";
import Order from "./Order";

const ServedOrders = ({ served }) => {
  return (
    <MainContainer title="Served">
      {served.length === 0 && (
        <div className="mt-2">
          <small>Orders that you mark as served will be shown here</small>
        </div>
      )}
      {served.map((order) => (
        <Order key={order.order_id} order={order} />
      ))}
    </MainContainer>
  );
};

export default ServedOrders;
