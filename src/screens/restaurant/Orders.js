import React, { useEffect, useState } from "react";
import Table from "../../components/restaurant/Table";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../../components/MainContainer";
import io from "socket.io-client";

const Restaurant = (props) => {
  let socket = io("http://localhost:8080/restaurant");

  const [tables, setTables] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });

    //When connected, table data is sent from server
    socket.on("tableData", (msg) => {
      console.log(msg);
      setTables(msg);
    });
  }, []);

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
          <MainContainer title="New orders"></MainContainer>
        </div>
        <div className="col-6">
          <MainContainer title="Served"></MainContainer>
        </div>
      </div>

      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <h6 className="border-bottom border-gray pb-2 mb-0">Served</h6>
        <div className="media text-muted pt-3">
          <svg
            className="bd-placeholder-img mr-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff"></rect>
            <text x="50%" y="50%" fill="#007bff" dy=".3em">
              32x32
            </text>
          </svg>
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus.
          </p>
        </div>

        <div className="media text-muted pt-3">
          <svg
            className="bd-placeholder-img mr-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff"></rect>
            <text x="50%" y="50%" fill="#007bff" dy=".3em">
              32x32
            </text>
          </svg>
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus.
          </p>
        </div>

        <div className="media text-muted pt-3">
          <svg
            className="bd-placeholder-img mr-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff"></rect>
            <text x="50%" y="50%" fill="#007bff" dy=".3em">
              32x32
            </text>
          </svg>
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
