import React from "react";
import MainContainer from "../ui/MainContainer";
import Order from "./Order";

const NewOrders = ({ orders, handleOrderPreparation }) => {
  return (
    <MainContainer title="New orders">
      <div style={{ maxHeight: 310, overflowY: "scroll" }}>
        {orders.length === 0 && (
          <div className="mt-2">
            <small>New orders will show up here</small>
          </div>
        )}

        {orders
          .slice(0)
          .reverse()
          .map((order) => (
            <Order key={order.order_id} order={order} onClick={handleOrderPreparation} />
          ))}
      </div>
    </MainContainer>
  );
};

export default NewOrders;
