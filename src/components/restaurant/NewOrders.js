import React from "react";
import MainContainer from "../MainContainer";
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

        {orders.map((order) => (
          <Order order={order} onClick={handleOrderPreparation} />
        ))}
      </div>
    </MainContainer>
  );
};

export default NewOrders;
