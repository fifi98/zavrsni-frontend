import React, { useEffect, useState } from "react";
import API from "../../util/api";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../../components/ui/MainContainer";
import AddForm from "../../components/categories/AddForm";
import EditForm from "../../components/categories/EditForm";
import CategoryRow from "../../components/categories/CategoryRow";
import { useSelector } from "react-redux";

const Tables = () => {
  const [tables, setCategories] = useState([]);
  const [editingTable, setEditingTable] = useState({});
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({ label: "" });
  const user = useSelector((state) => state);

  useEffect(() => {
    API.get(`/restaurant/${user.user_id}/menu/categories`).then((result) => {
      setCategories(result.data.data);
    });
  }, []);

  const handleAdd = () => {
    setAdd(!add);
  };

  const handleChange = (event) => {
    setInput({ label: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.post(`/restaurant/${user.user_id}/menu/categories`, {
      categoryName: input.label,
    }).then((res) => {
      setCategories(res.data.data);
      setAdd(false);
      setInput({ label: "" });
    });
  };

  const handleDelete = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category? Note: all items in the category will also be deleted!")) {
      API.delete(`/restaurant/${user.user_id}/menu/categories/${categoryId}`).then((res) => {
        setCategories(res.data.data);
      });
    }
  };

  const handleEdit = (tableId) => {
    API.get(`/restaurant/${user.user_id}/tables/${tableId}`).then((res) => {
      setEditingTable(...res.data.data);
      setEdit(true);
    });
  };

  const handleEditChange = (event) => {
    setEditingTable({ ...editingTable, label: event.target.value });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setEdit(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    API.put(`/restaurant/${user.user_id}/tables/${editingTable.table_id}`, {
      label: editingTable.label,
    }).then((res) => {
      setCategories(res.data.data);
      setEdit(false);
      setEditingTable({});
    });
  };

  return (
    <MainContainer icon={faBars} handleAdd={handleAdd} title="Menu categories">
      {add && <AddForm handleSubmit={handleSubmit} handleChange={handleChange} input={input} />}
      {edit && (
        <EditForm handleSave={handleSave} handleEditChange={handleEditChange} handleCancel={handleCancel} editingTable={editingTable} />
      )}

      {tables.length === 0 ? (
        "There are no added tables yet!"
      ) : (
        <table className="table table-hover table-borderless">
          <tbody>
            {tables.map((table) => (
              <CategoryRow table={table} handleEdit={handleEdit} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      )}
    </MainContainer>
  );
};

export default Tables;
