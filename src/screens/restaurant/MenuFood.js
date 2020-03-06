import React, { useEffect, useState } from "react";
import API from "../../util/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUtensils, faChair, faPlus } from "@fortawesome/free-solid-svg-icons";

const Tables = () => {
  const [categories, setCategories] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    API.get("/restaurant/4/menu/categories").then(result => {
      setCategories(result.data.data);
      console.log(categories);
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
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faUtensils} /> Menu items
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
          <div class="btn-group btn-group-toggle mb-3" style={{ width: "100%" }} data-toggle="buttons">
            {categories.map(category => (
              <label class="btn btn-outline-secondary">
                <input type="radio" name="options" id="option1" checked />
                {category.category}
              </label>
            ))}
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Type to search" />
          </div>
          <div className="card mb-3 mt-2">
            <div className="row no-gutters">
              <div className="col-4 col-md-2">
                <img
                  src="https://image.dnevnik.hr/media/images/1600xX/Jan2018/61454893.jpg"
                  className="card-img"
                  alt="..."
                  style={{ height: "100%" }}
                />
              </div>
              <div className="col-8 col-md-10">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>

                  <p className="card-text">
                    <small className="text-muted">Lorem ipsum</small>
                  </p>
                  <p className="card-text">40kn</p>
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
