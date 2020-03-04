import React, { useEffect, useState } from "react";
import API from "../../util/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faChair, faPlus, faQrcode } from "@fortawesome/free-solid-svg-icons";

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    API.get("/restaurant/4/tables").then(result => {
      console.log(result.data.data);
      setTables(result.data.data);
      console.log(tables);
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
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faChair} /> Tables
            </h6>
          </div>
          <div class="float-right mb-3">
            <button className="btn btn-outline-dark" onClick={handleAdd}>
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faPlus} />
              Add
            </button>
          </div>
        </div>

        <div className="mt-2">
          {add ? (
            <div class="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Table label</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" class="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          ) : (
            ""
          )}

          <table className="table table-hover">
            <tbody>
              {tables.map(table => (
                <tr>
                  <td>{table.label}</td>
                  <td className="text-center">
                    <span className="badge badge-success">Empty</span>
                  </td>
                  <td className="text-right">
                    <FontAwesomeIcon className="mr-2" fixedWidth icon={faQrcode} />
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
