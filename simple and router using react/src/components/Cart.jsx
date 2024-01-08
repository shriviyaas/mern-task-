import React, { useState } from 'react';
import Navbar from './Navbar';
import './Cart.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  ]);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className='cart'>
        <Navbar />
        <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
          <p className="total">Total: ${getTotal()}</p>
          <button className="btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;