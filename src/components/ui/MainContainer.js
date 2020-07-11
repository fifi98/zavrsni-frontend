import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MainContainer = ({ icon, title, handleAdd, children }) => {
  return (
    <div className="my-3 p-3 bg-white rounded shadow-sm">
      <div className="clearfix border-bottom border-gray">
        <div className="float-left mt-2 mb-3">
          <h6 className="mb-0 ">
            {icon && <FontAwesomeIcon className="mr-2" fixedWidth icon={icon} />} {title}
          </h6>
        </div>
        {handleAdd && (
          <div className="float-right mb-3">
            <button className="btn btn-outline-dark" onClick={handleAdd}>
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faPlus} />
              Add
            </button>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default MainContainer;
