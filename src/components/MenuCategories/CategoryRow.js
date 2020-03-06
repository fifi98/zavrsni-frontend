import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const CategoryRow = ({ table, handleEdit, handleDelete }) => {
  return (
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
  );
};

export default CategoryRow;
