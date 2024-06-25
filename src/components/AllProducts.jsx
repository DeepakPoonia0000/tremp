import React from "react";
import "../Styles/AllProducts.css"; // Optional: Add your own CSS for styling
import { productListData } from "./Helper";

const AllProducts = () => {
  return (
    <div className="all-products">
      {productListData.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.name}</h2>
          <div className="product-grid">
            {category.items.map((product, idx) => (
              <div key={idx} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-price" style={{ color: "wheat" }}>
                  <s>₹1200 </s>
                </p>
                <p className="product-price">₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
