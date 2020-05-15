import React, { useEffect, useState } from "react";
import Table from "../../components/restaurant/Table";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../../components/MainContainer";
import io from "socket.io-client";
import TimeAgo from "react-timeago";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Restaurant = (props) => {
  let socket = io("http://localhost:8080/", {
    autoConnect: false,
  });

  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [served, setServed] = useState([]);
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Connected");
    });

    // After connecting, table data is received from server
    socket.on("tableData", (msg) => {
      setTables(msg);
    });

    // When a new order has been received
    socket.on("order", (msg) => {
      console.log(msg);
      setOrders((old) => [...old, msg]);
    });
  }, []);

  const handleOrderPreparation = () => {
    alert("Preparation");
  };

  return (
    <div>
      <MainContainer icon={faTag} title="Orders">
        <div className="row mt-4 p-2">
          {tables.map((table) => (
            <Table key={table.table_id} type="Empty" id={table.label} />
          ))}
        </div>
      </MainContainer>

      <div className="row">
        <div className="col-6">
          <MainContainer title="New orders">
            <div style={{ maxHeight: 310, overflowY: "scroll" }}>
              {orders.length === 0 && (
                <div className="mt-2">
                  <small>New orders will show up here</small>
                </div>
              )}

              {orders.map((order) => (
                <div class="card mt-3" onClick={handleOrderPreparation}>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-10">
                        <h6 className="card-title m-0">
                          <a href="#">{order.table_name}</a>
                        </h6>

                        <p className="card-text">
                          <small className="text-muted">
                            <TimeAgo
                              date={Date.now()}
                              formatter={(value, unit) => {
                                if (unit === "second" && value < 15) return "just now";
                                if (unit === "second") return "few seconds ago";
                                if (unit === "minute") return `${value} ${value === 1 ? "minute" : "minutes"} ago`;
                              }}
                            />
                          </small>
                        </p>
                      </div>
                      <div className="col-2 my-auto text-center">
                        <FontAwesomeIcon style={{ cursor: "pointer" }} className="mr-2" size="lg" icon={faCheckCircle} />
                      </div>
                    </div>

                    {/* {order.items.map((item) => (
                    <small>
                      {item.name}
                      <br />
                    </small>
                  ))} */}
                  </div>
                </div>
              ))}
            </div>
          </MainContainer>
        </div>
        <div className="col-6">
          <MainContainer title="Served">
            {served.length === 0 && (
              <div className="mt-2">
                <small>Orders that you mark as served will be shown here</small>
              </div>
            )}
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
