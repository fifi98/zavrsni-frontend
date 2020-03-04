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
        <div class="float-left mt-2">
          <h6 className="mb-0 ">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faChair} /> Tables
          </h6>
        </div>
        <div class="float-right">
          <button className="btn btn-outline-dark">
            <FontAwesomeIcon className="mr-2" fixedWidth icon={faPlus} />
            Add
          </button>
        </div>

        <div className="row mt-2 p-3">
          <table className="table table-hover">
            <tbody>
              {tables.map(table => (
                <tr>
                  <td>{table.label}</td>
                  <td className="text-center">
                    <span className="badge badge-success">Empty</span>
                  </td>
                  <td className="text-right">
                    <FontAwesomeIcon className="mr-2" fixedWidth icon={faEdit} />
                    <FontAwesomeIcon className="mr-2" fixedWidth icon={faTrash} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tables;
