import React from "react";

const AddForm = props => {
  return (
    <div class="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert">
      <form>
        <div className="row">
          <div className="col-6">
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <textarea class="form-control"></textarea>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Price</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Image</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
