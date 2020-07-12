import React, { useEffect, useState } from "react";
import MainContainer from "../../components/ui/MainContainer";
import TableRow from "../../components/tables/TableRow";
import EditForm from "../../components/tables/EditForm";
import AddForm from "../../components/tables/AddForm";
import API from "../../util/api";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { faChair, faPrint, faLink } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { QRCode } from "react-qr-svg";

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [editingTable, setEditingTable] = useState({});
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState({ label: "" });

  const [show, setShow] = useState(false);
  const [selectedTable, setSelectedTable] = useState({});
  const user = useSelector((state) => state);

  const handleShare = (table) => {
    setSelectedTable(table);
    setShow(true);
  };

  useEffect(() => {
    API.get(`/restaurant/${user.user_id}/tables`).then((result) => {
      setTables(result.data.data);
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
    API.post(`/restaurant/${user.user_id}/tables`, {
      label: input.label,
    }).then((res) => {
      setTables(res.data.data);
      setAdd(false);
      setInput({ label: "" });
    });
  };

  const handleDelete = (tableId) => {
    if (window.confirm("Are you sure you want to delete this table?")) {
      API.delete(`/restaurant/${user.user_id}/tables/${tableId}`).then((res) => {
        setTables(res.data.data);
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
          <QRCode
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="Q"
            value={`${process.env.REACT_APP_BASE_URL}/order/${selectedTable.sharing_id}`}
          />
        </Modal.Body>
        <Modal.Footer>
          <OverlayTrigger
            placement={"top"}
            overlay={
              <Tooltip>
                `${process.env.REACT_APP_BASE_URL}/order/${selectedTable.sharing_id}`
              </Tooltip>
            }
          >
            <CopyToClipboard text={`${process.env.REACT_APP_BASE_URL}/order/${selectedTable.sharing_id}`}>
              <Button variant="primary" onClick={() => setShow(false)}>
                <FontAwesomeIcon className="mr-2" icon={faLink} />
                Copy link
              </Button>
            </CopyToClipboard>
          </OverlayTrigger>
          <Button variant="primary" onClick={() => setShow(false)}>
            <FontAwesomeIcon className="mr-2" icon={faPrint} />
            Print QR code
          </Button>
        </Modal.Footer>
      </Modal>

      {add && <AddForm handleSubmit={handleSubmit} handleChange={handleChange} input={input} />}
      {edit && (
        <EditForm editingTable={editingTable} handleSave={handleSave} handleEditChange={handleEditChange} handleCancel={handleCancel} />
      )}

      {tables.length === 0 ? (
        "There are no added tables yet!"
      ) : (
        <table className="table table-hover table-borderless">
          <tbody>
            {tables.map((table) => (
              <TableRow key={table.table_id} table={table} handleEdit={handleEdit} handleDelete={handleDelete} handleShare={handleShare} />
            ))}
          </tbody>
        </table>
      )}
    </MainContainer>
  );
};

export default Tables;
