import React, { useEffect, useState } from "react";
import API from "../../util/api";
import MainContainer from "../../components/MainContainer";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import AddForm from "../../components/MenuFood/AddForm";
import FoodCard from "../../components/MenuFood/FoodCard";

const Tables = () => {
  const [categories, setCategories] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    API.get("/restaurant/4/menu/categories").then(result => {
      setCategories(result.data.data);
    });
  }, []);

  const handleAdd = () => {
    setAdd(!add);
  };

  return (
    <MainContainer icon={faUtensils} handleAdd={handleAdd} title="Menu items">
      <div className="mt-2 pt-2">
        {add && <AddForm />}
        <div class="btn-group btn-group-toggle mb-3" style={{ width: "100%" }} data-toggle="buttons">
          {categories.map(category => (
            <label key={category.category_id} class="btn btn-outline-secondary">
              <input type="radio" name="options" id="option1" checked />
              {category.category}
            </label>
          ))}
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Type to search" />
        </div>
        <FoodCard />
        <FoodCard />
      </div>
    </MainContainer>
  );
};

export default Tables;
