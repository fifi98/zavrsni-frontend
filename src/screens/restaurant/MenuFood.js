import React, { useEffect, useState } from "react";
import API from "../../util/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faChair, faPlus } from "@fortawesome/free-solid-svg-icons";

const Tables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    API.get("/restaurant/4/tables").then(result => {
      console.log(result.data.data);
      setTables(result.data.data);
      console.log(tables);
    });
  }, []);

  return (
    <>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <div className="clearfix border-bottom border-gray">
          <div class="float-left mt-2">
            <h6 className="mb-0 ">
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faChair} /> Menu and Food
            </h6>
          </div>
          <div class="float-right mb-3">
            <button className="btn btn-outline-dark">
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faPlus} />
              Add
            </button>
          </div>
        </div>

        <div className="row mt-2 p-3">
          <div class="card mb-3" style={{ width: "100%" }}>
            <div class="row no-gutters">
              <div class="col-md-2">
                <img
                  src="https://image.dnevnik.hr/media/images/1600xX/Jan2018/61454893.jpg"
                  class="card-img"
                  alt="..."
                  style={{ height: "100%" }}
                />
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>

                  <p class="card-text">
                    <small class="text-muted">Lorem ipsum</small>
                  </p>
                  <p class="card-text">40kn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tables;
