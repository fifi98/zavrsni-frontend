import React from "react";

const EditForm = ({ editingTable, handleSave, handleEditChange, handleCancel }) => {
  return (
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
  );
};

export default EditForm;
