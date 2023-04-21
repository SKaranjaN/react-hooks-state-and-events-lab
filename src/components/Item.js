import React, {useState} from "react";

function Item({ name, category }) {
  const [ItemAdded, setItemAdded] = useState()
  const AddItem = ItemAdded ? "in-cart" : "";

  function addItem() {
    setItemAdded(!ItemAdded)
  }
  return (
    <li className={AddItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick= {addItem} className="add">{ItemAdded ? "Remove from Cart" : "Add  Cart"}</button>
    </li>
  );
}

export default Item;
