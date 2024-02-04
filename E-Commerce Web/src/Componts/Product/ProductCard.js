// src/components/Product/ProductCard.js

import React from 'react';
import Button from '../common/Button';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <Button onClick={() => console.log('Add to Cart clicked')} label="Add to Cart" />
    </div>
  );
}

export default ProductCard;
