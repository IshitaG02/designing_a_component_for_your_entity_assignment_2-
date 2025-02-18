// write product card here
import React from "react";
import ViewProductButton from "../components/button"; // Import button component
import "./ProductCard.css"; // Import product card styling

const Productcard = () => {
  const productImage = "https://m.media-amazon.com/images/I/81FzSswwCVL.jpg"; // Dummy image
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="product-card">
      <img src={productImage} alt="Product" />
      <h2>{productName}</h2>
      <p className="price">{productPrice}</p>
      <ViewProductButton /> {/* Using the button component */}
    </div>
  );
};

export default Productcard;

