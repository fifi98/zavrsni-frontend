import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

const CategoryRow = ({ table, handleEdit, handleDelete }) => {
  return (
    <tr className="border-bottom border-gray" key={table.category_id}>
      <td>{table.category}</td>
      <td className="text-center">
        <Badge variant="secondary">{table.num_items} items</Badge>
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
