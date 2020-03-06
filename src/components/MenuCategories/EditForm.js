import React from "react";

const EditForm = props => {
  console.log(props);

  return (
    <div className="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert">
      <form onSubmit={props.handleSave}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Table label</label>
          <input
            type="text"
            className="form-control"
            value={props.editingTable.label}
            onChange={props.handleEditChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mr-2">
          Save
        </button>
        <button onClick={props.handleCancel} className="btn btn-secondary">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
