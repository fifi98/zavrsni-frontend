import React, { useEffect, useState } from "react";
import API from "../../util/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faChair, faPlus } from "@fortawesome/free-solid-svg-icons";

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    API.get("/restaurant/4/tables").then(result => {
      setTables(result.data.data);
    });
  }, []);

  const handleAdd = () => {
    setAdd(!add);
  };

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
            <button className="btn btn-outline-dark" onClick={handleAdd}>
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faPlus} />
              Add
            </button>
          </div>
        </div>

        <div className="mt-2 pt-2">
          {add ? (
            <div class="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert">
              <form>
                <div className="row">
                  <div className="col-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Title</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Description</label>
                      <textarea class="form-control"></textarea>
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Price</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Image</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
          <div class="card mb-3 mt-2">
            <div class="row no-gutters">
              <div class="col-4 col-md-2">
                <img
                  src="https://image.dnevnik.hr/media/images/1600xX/Jan2018/61454893.jpg"
                  class="card-img"
                  alt="..."
                  style={{ height: "100%" }}
                />
              </div>
              <div class="col-8 col-md-10">
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
