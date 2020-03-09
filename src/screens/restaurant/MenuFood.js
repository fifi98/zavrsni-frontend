import React, { useEffect, useState } from "react";
import API from "../../util/api";
import MainContainer from "../../components/MainContainer";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import AddForm from "../../components/MenuFood/AddForm";
import FoodCard from "../../components/MenuFood/FoodCard";

const Tables = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    API.get("/restaurant/4/menu/categories").then(result => {
      setCategories(result.data.data);
      //Select the first category by default
      setSelectedCategory(result.data.data[0].category_id);
    });
  }, []);

  useEffect(() => {
    //Dohvati jela za tu kategoriju
    API.get("/restaurant/4/menu/categories/" + selectedCategory + "/items").then(result => {
      setMenuItems(result.data.data);
    });
  }, [selectedCategory]);

  const handleAdd = () => {
    setAdd(!add);
  };

  const handleSearchChange = event => {
    setSearchKeyword(event.target.value);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(parseInt(event.target.value));
  };

  return (
    <MainContainer icon={faUtensils} handleAdd={handleAdd} title="Menu items">
      <div className="mt-2 pt-2">
        {add && <AddForm />}
        <div className="btn-group btn-group-toggle mb-3 w-100">
          {categories.map(category => (
            <label
              key={category.category_id}
              className={"btn btn-outline-secondary " + (category.category_id === selectedCategory ? "active" : "")}
            >
              <input
                type="radio"
                name="options"
                value={category.category_id}
                checked={category.category_id === selectedCategory}
                onChange={handleCategoryChange}
              />
              {category.category}
            </label>
          ))}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search by name"
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </div>
        {menuItems.map(
          item => item.name.toLowerCase().includes(searchKeyword.toLowerCase()) && <FoodCard item={item} />
        )}
      </div>
    </MainContainer>
  );
};

export default Tables;
