import React from "react";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div className="contenedor">
      <h2>{props.greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
