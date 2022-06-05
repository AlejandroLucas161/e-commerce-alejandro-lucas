import React from "react";
import Item from "../Item/Item";

import "./ItemList.styles.css";

const ItemList = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
