import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ item }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {item.name} <span class="badge badge-primary badge-pill">{item.price} kn</span>
    </li>
  );
};

const AddedItems = ({ addedItems, handleOrder, children }) => {
  return (
    <div className="my-3 p-3 bg-white rounded shadow-sm">
      <div className="clearfix border-bottom border-gray mb-2">
        <div className="float-left mt-2 mb-3">
          <h6 className="mb-0 ">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faListAlt} /> Added items
          </h6>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        {addedItems.map((item) => (
          <ListItem item={item} key={item.item_id} />
        ))}
      </ul>
      <div className="clearfix pt-2 mt-2">
        <button className="btn btn-primary w-100" onClick={handleOrder}>
          Click to order (120$)
        </button>
      </div>
    </div>
  );
};

export default AddedItems;
