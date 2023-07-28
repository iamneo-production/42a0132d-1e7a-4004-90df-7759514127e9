import React from "react";
import { useParams } from "react-router-dom"; // If using React Router for routing
import { products } from "./assets/data/data"
import './ProductDetail.css';
const ProductDetail = () => {
  const { id } = useParams(); // If using React Router for routing

  // Find the product with the matching ID
  const product = products.find((p) => p.id === Number(id));

  // If the product with the given ID is not found, display a message or redirect to a 404 page

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.cover} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <h4>Ingredients:</h4>
        <ul>
          {product.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
