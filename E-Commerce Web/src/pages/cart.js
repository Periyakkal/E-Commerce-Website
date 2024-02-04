// src/pages/Cart.js
import React, { useContext, useState } from 'react';
import Button from '../components/common/Button';
import CartItem from '../components/CartItem';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import OrderPlaced from './OrderPlaced';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Perform order placement logic (you can modify this according to your needs)
    // For demonstration purposes, I'm just clearing the cart and setting orderPlaced to true
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {orderPlaced ? (
        <OrderPlaced />
      ) : (
        <div>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <div>
                {/* Add total price or additional cart summary here */}
              </div>
              <Button label="Place Order" onClick={handlePlaceOrder} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
