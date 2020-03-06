import React, { useEffect, useState } from "react";
import API from "../../util/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faBars, faPlus, faQrcode } from "@fortawesome/free-solid-svg-icons";

const Tables = () => {
  const [tables, setCategories] = useState([]);
  const [editingTable, setEditingTable] = useState({});
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({ label: "" });

  useEffect(() => {
    API.get("/restaurant/4/menu/categories").then(result => {
      setCategories(result.data.data);
    });
  }, []);

  const handleAdd = () => {
    setAdd(!add);
  };

  const handleChange = event => {
    setInput({ label: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    API.post("/restaurant/4/menu/categories", {
      categoryName: input.label
    }).then(res => {
      setCategories(res.data.data);
      setAdd(false);
      setInput({ label: "" });
    });
  };

  const handleDelete = categoryId => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      API.delete("/restaurant/4/menu/categories/" + categoryId).then(res => {
        setCategories(res.data.data);
      });
    }
  };

  const handleEdit = tableId => {
    API.get("/restaurant/4/tables/" + tableId).then(res => {
      setEditingTable(...res.data.data);
      setEdit(true);
    });
  };

  const handleEditChange = event => {
    setEditingTable({ ...editingTable, label: event.target.value });
  };

  const handleCancel = event => {
    event.preventDefault();
    setEdit(false);
  };

  const handleSave = event => {
    event.preventDefault();
    API.put("/restaurant/4/tables/" + editingTable.table_id, {
      label: editingTable.label
    }).then(res => {
      setCategories(res.data.data);
      setEdit(false);
      setEditingTable({});
    });
  };

  return (
    <>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <div className="clearfix border-bottom border-gray">
          <div className="float-left mt-2">
            <h6 className="mb-0 ">
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faBars} /> Menu categories
            </h6>
          </div>
          <div className="float-right mb-3">
            <button className="btn btn-outline-dark" onClick={handleAdd}>
              <FontAwesomeIcon className="mr-2" fixedWidth icon={faPlus} />
              Add
            </button>
          </div>
        </div>

        <div className="mt-2">
          {add ? (
            <div className="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Category name</label>
                  <input type="text" className="form-control" value={input.label} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
          {edit ? (
            <div className="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert">
              <form onSubmit={handleSave}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Table label</label>
                  <input type="text" className="form-control" value={editingTable.label} onChange={handleEditChange} />
                </div>

                <button type="submit" className="btn btn-primary mr-2">
                  Save
                </button>
                <button onClick={handleCancel} className="btn btn-secondary">
                  Cancel
                </button>
              </form>
            </div>
          ) : (
            ""
          )}

          {tables.length === 0 ? (
            "There are no added tables yet!"
          ) : (
            <table className="table table-hover table-borderless">
              <tbody>
                {tables.map(table => (
                  <tr className="border-bottom border-gray" key={table.category_id}>
                    <td>{table.category}</td>
                    <td className="text-center">
                      <span className="badge badge-success">Broj jela u toj kategoriji</span>
                    </td>
                    <td className="text-right">
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => handleEdit(table.category_id)}
                        className="mr-2"
                        fixedWidth
                        icon={faEdit}
                      />
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(table.category_id)}
                        className="mr-2"
                        fixedWidth
                        icon={faTrash}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Tables;
