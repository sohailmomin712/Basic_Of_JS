import React from "react";

const ProductItem = ({data}) => {
  return (
    <div
      data-testid="product-item"
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        flexDirection: "column",
      }}
    >
      <img src={data.image} alt={data.title} data-testid="product-image" height="100px" />
      <b data-testid="product-title">{data.title}</b>
      <span data-testid="product-price">₹ {data.price}</span>
      <div style={{ display: "flex" }}>
        <b data-testid="product-category">{data.category}</b>
      </div>
    </div>
  );
};
export default ProductItem;
