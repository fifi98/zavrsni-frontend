import React from "react";

const AddForm = ({ handleSubmit, handleChange, input }) => {
  return (
    <div className="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Table label</label>
          <input type="text" className="form-control" value={input.label} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
