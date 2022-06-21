import React from "react";

export const Item = ({ currItem, handleCart }) => {
  const { title, description, img, price } = currItem;
  return (
    <>
      <div className="item-info">
        <div className="product-img">
          <img src={img} alt="imgerror" />
        </div>

        <div className="Title">
          <p>{title}</p>
          <p>{description}</p>
        </div>

        <div className="price">
          <h3> Price - {price}Rs</h3>
          <p></p>
          <button onClick={() => handleCart(currItem)}>Add to Cart</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Item;
