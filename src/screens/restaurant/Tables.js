import React, { useEffect, useState } from "react";
import API from "../../util/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
        <h6 className="mb-0">Tables</h6>

        <div className="row mt-2 p-3">
          <table className="table table-hover">
            <tbody>
              {tables.map(table => (
                <tr>
                  <td>{table.label}</td>
                  <td>
                    <span className="badge badge-success">Empty</span>
                  </td>
                  <td>
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
