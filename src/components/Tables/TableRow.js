import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faQrcode } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ table, handleEdit, handleDelete }) => {
  return (
    <tr className="border-bottom border-gray">
      <td>{table.label}</td>
      <td className="text-center">
        <span className="badge badge-success">Empty</span>
      </td>
      <td className="text-right">
        <FontAwesomeIcon className="mr-2" fixedWidth icon={faQrcode} />
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
