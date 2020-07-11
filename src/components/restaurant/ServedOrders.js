import React from "react";
import MainContainer from "../ui/MainContainer";
import Order from "./Order";

const ServedOrders = ({ served, handleOrderPreparation }) => {
  return (
    <MainContainer title="Served">
      {served.length === 0 && (
        <div className="mt-2">
          <small>Orders that you mark as served will be shown here</small>
        </div>
      )}
      {served
        .slice(0)
        .reverse()
        .map((order) => (
          <Order key={order.order_id} order={order} onClick={handleOrderPreparation} />
        ))}
    </MainContainer>
  );
};

export default ServedOrders;
