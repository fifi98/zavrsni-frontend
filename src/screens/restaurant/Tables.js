import React, { useEffect, useState } from "react";
import API from "../../util/api";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../../components/MainContainer";
import AddForm from "../../components/Tables/AddForm";
import TableRow from "../../components/Tables/TableRow";
import EditForm from "../../components/Tables/EditForm";
import { Button, Modal } from "react-bootstrap";
import { QRCode } from "react-qr-svg";

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [editingTable, setEditingTable] = useState({});
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({ label: "" });

  const [show, setShow] = useState(false);
  const [selectedTable, setSelectedTable] = useState({});

  const handleShare = table => {
    setSelectedTable(table);
    setShow(true);
  };

  useEffect(() => {
    API.get("/restaurant/4/tables").then(result => {
      setTables(result.data.data);
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
    API.post("/restaurant/4/tables", {
      label: input.label
    }).then(res => {
      setTables(res.data.data);
      setAdd(false);
      setInput({ label: "" });
    });
  };

  const handleDelete = tableId => {
    if (window.confirm("Are you sure you want to delete this table?")) {
      API.delete("/restaurant/4/tables/" + tableId).then(res => {
        setTables(res.data.data);
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
      setTables(res.data.data);
      setEdit(false);
      setEditingTable({});
    });
  };

  return (
    <MainContainer icon={faChair} handleAdd={handleAdd} title="Tables">
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTable.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <QRCode
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            style={{ width: 256 }}
            value="http://localhost/order/iagawAawf"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {add && <AddForm handleSubmit={handleSubmit} handleChange={handleChange} input={input} />}
      {edit && (
        <EditForm
          editingTable={editingTable}
          handleSave={handleSave}
          handleEditChange={handleEditChange}
          handleCancel={handleCancel}
        />
      )}

      {tables.length === 0 ? (
        "There are no added tables yet!"
      ) : (
        <table className="table table-hover table-borderless">
          <tbody>
            {tables.map(table => (
              <TableRow
                key={table.table_id}
                table={table}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleShare={handleShare}
              />
            ))}
          </tbody>
        </table>
      )}
    </MainContainer>
  );
};

export default Tables;
