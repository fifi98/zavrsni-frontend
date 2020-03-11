import React, { useState } from "react";
import API from "../../util/api";

const AddForm = ({ categories, input, handleSubmit, handleChange }) => {
  return (
    <div class="alert alert-light border-bottom border-gray mb-4 pb-4" role="alert" onSubmit={handleSubmit}>
      <form>
        <div className="row">
          <div className="col-6">
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <textarea className="form-control" name="description" value={input.description} onChange={handleChange} />
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                id="exampleInputEmail1"
                value={input.price}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Category</label>
              <select
                class="custom-select"
                name="categoryId"
                id="inputGroupSelect01"
                value={input.categoryId}
                onChange={handleChange}
              >
                {categories.map(category => (
                  <option value={category.category_id}>{category.category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
