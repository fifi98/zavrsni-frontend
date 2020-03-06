import React from "react";

const AddForm = props => {
  return (
    <div className="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert">
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Category name</label>
          <input type="text" className="form-control" value={props.input.label} onChange={props.handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
