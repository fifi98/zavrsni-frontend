import React, { useEffect, useState } from "react";
import API from "../../util/api";
import MainContainer from "../../components/MainContainer";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import AddForm from "../../components/MenuFood/AddForm";
import FoodCard from "../../components/MenuFood/FoodCard";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const Tables = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [add, setAdd] = useState(false);

  const [input, setInput] = useState({ name: "", description: "", price: "", categoryId: 0 });

  const handleSubmit = (event) => {
    console.log(input);

    event.preventDefault();
    API.post("/restaurant/4/menu/categories/" + input.categoryId + "/items", input).then((response) => {
      if (selectedCategory === parseInt(input.categoryId)) setMenuItems(response.data.data);
      setAdd(false);
      setInput({ name: "", description: "", price: "", categoryId: selectedCategory });
    });
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    API.get("/restaurant/4/menu/categories").then((result) => {
      setCategories(result.data.data);
      //Select the first category by default
      setInput((i) => ({ ...i, categoryId: result.data.data[0].category_id }));
      setSelectedCategory(result.data.data[0].category_id);
    });
  }, []);

  useEffect(() => {
    //Dohvati jela za tu kategoriju
    API.get("/restaurant/4/menu/categories/" + selectedCategory + "/items").then((result) => {
      setMenuItems(result.data.data);
    });
  }, [selectedCategory]);

  const handleAdd = () => {
    setAdd(!add);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleDelete = (item_id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    API.delete(`/restaurant/4/menu/categories/${selectedCategory}/items/${item_id}`).then((results) => {
      setMenuItems((old) => old.filter((item) => item.item_id !== item_id));
    });
  };

  return (
    <MainContainer icon={faUtensils} handleAdd={handleAdd} title="Menu items">
      <div className="mt-2 pt-2">
        {add && <AddForm categories={categories} input={input} handleSubmit={handleSubmit} handleChange={handleChange} />}
        <ToggleButtonGroup name="category" value={selectedCategory} onChange={(value) => setSelectedCategory(value)} className="w-100 mb-3">
          {categories.map((category) => (
            <ToggleButton
              type="radio"
              value={category.category_id}
              variant="outline-secondary"
              checked={category.category_id === selectedCategory}
            >
              {category.category}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search by name"
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </div>
        {menuItems.length === 0 && <p>There are no items in this category</p>}
        {menuItems.map(
          (item) =>
            item.name.toLowerCase().includes(searchKeyword.toLowerCase()) && (
              <FoodCard item={item} key={item.item_id} handleDelete={handleDelete} />
            )
        )}
      </div>
    </MainContainer>
  );
};

export default Tables;
