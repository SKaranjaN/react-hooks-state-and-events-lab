import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setselectedCategory] = useState("All")
  

  function filterSelected(e) {
    setselectedCategory(e.target.value);
  }

  function displayItem(item) {
    return selectedCategory === "All" || item.category === selectedCategory;
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterSelected} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => 
        displayItem(item) &&(
          <Item key={item.id} name={item.name} category={item.category} displat = {displayItem(item)} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
