import React from "react";
import { faEdit, faTrash, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableRow = ({ table, handleEdit, handleDelete, handleShare }) => {
  return (
    <tr className="border-bottom border-gray">
      <td>{table.label}</td>
      <td className="text-center">
        <span className={`badge ${table.status === "Empty" ? "badge-success" : "badge-danger"}`}>{table.status}</span>
      </td>
      <td className="text-right">
        <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={() => handleShare(table)} className="mr-2" fixedWidth icon={faQrcode} />
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={() => handleEdit(table.table_id)}
          className="mr-2"
          fixedWidth
          icon={faEdit}
        />
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(table.table_id)}
          className="mr-2"
          fixedWidth
          icon={faTrash}
        />
      </td>
    </tr>
  );
};

export default TableRow;
